"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import { useWatch, COLORWAYS } from "@/context/WatchContext";

interface ExplodedPart {
  mesh: THREE.Object3D;
  origPos: THREE.Vector3;
  targetPos: THREE.Vector3;
}

export default function WatchCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { colorway, isExploded, explodeProgress, setIsLoading } = useWatch();

  // References to mutable Three.js state across renders
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const watchGroupRef = useRef<THREE.Group | null>(null);
  const explodedPartsRef = useRef<ExplodedPart[]>([]);
  const customizableMaterialsRef = useRef<Map<string, THREE.MeshStandardMaterial>>(new Map());
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDragging: false, startX: 0, startY: 0, rotX: 0, rotY: 0 });
  const currentExplodeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.01, 100);
    camera.position.set(0, 0, 0.42);
    cameraRef.current = camera;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(2, 3, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(-3, -2, -2);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xfff5ea, 1.2);
    fillLight.position.set(0, -3, 2);
    scene.add(fillLight);

    // Watch Container Group
    const watchGroup = new THREE.Group();
    // Default orientation showcasing the dial facing forward slightly tilted
    watchGroup.rotation.set(0.12, 0.25, 0.05);
    scene.add(watchGroup);
    watchGroupRef.current = watchGroup;

    // 4. Load EXR Environment Map for Realistic Metal & Glass Reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const exrLoader = new EXRLoader();
    exrLoader.load(
      "/assets/envmap-kW4EmG7W.exr",
      (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.environment = envMap;
        texture.dispose();
        pmremGenerator.dispose();
      },
      undefined,
      (err) => {
        console.warn("Could not load EXR environment map, using fallback ambient reflections:", err);
      }
    );

    // 5. Load GLTF Master Model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "/assets/watch-DXFPNOEl.glb",
      (gltf) => {
        const model = gltf.scene;

        // Auto-center model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Analyze nodes and prepare exploded animation references
        const parts: ExplodedPart[] = [];
        const matMap = new Map<string, THREE.MeshStandardMaterial>();

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            const mat = mesh.material as THREE.MeshStandardMaterial;
            if (mat) {
              // Clone materials to prevent unintended side effects across instances
              const clonedMat = mat.clone();
              mesh.material = clonedMat;

              if (clonedMat.name) {
                matMap.set(clonedMat.name, clonedMat);
              }
            }

            // Record exploded offsets based on naming conventions and hierarchy
            const name = mesh.name.toLowerCase();
            const origPos = mesh.position.clone();
            const targetPos = origPos.clone();

            if (name.includes("crystal-front")) {
              targetPos.z += 0.06;
            } else if (name.includes("hand-")) {
              targetPos.z += 0.045;
            } else if (name.includes("dial-front") || name.includes("dial-outline")) {
              targetPos.z += 0.03;
            } else if (name.includes("crystal-back")) {
              targetPos.z -= 0.055;
            } else if (name.includes("backplate-xploded-1") || name.includes("backplate-xploded-2")) {
              targetPos.z -= 0.04;
              targetPos.y += (Math.random() - 0.5) * 0.02;
            } else if (name.includes("backplate-xploded")) {
              targetPos.z -= 0.032;
            } else if (name.includes("xplodedside-1")) {
              targetPos.x += 0.035;
            } else if (name.includes("xplodedside-2")) {
              targetPos.x -= 0.035;
            } else if (name.includes("screw") || name.includes("ruby")) {
              targetPos.z += (Math.random() - 0.5) * 0.04;
            }

            parts.push({ mesh, origPos, targetPos });
          }
        });

        explodedPartsRef.current = parts;
        customizableMaterialsRef.current = matMap;
        watchGroup.add(model);
        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error("Error loading watch GLB model:", err);
        setIsLoading(false);
      }
    );

    // 6. Interactive Mouse & Drag Controllers
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;

      if (mouseRef.current.isDragging) {
        const deltaX = e.clientX - mouseRef.current.startX;
        const deltaY = e.clientY - mouseRef.current.startY;
        mouseRef.current.rotY += deltaX * 0.005;
        mouseRef.current.rotX += deltaY * 0.005;
        mouseRef.current.startX = e.clientX;
        mouseRef.current.startY = e.clientY;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDragging = true;
      mouseRef.current.startX = e.clientX;
      mouseRef.current.startY = e.clientY;
    };

    const handleMouseUp = () => {
      mouseRef.current.isDragging = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // 7. Window Resize Handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 8. Animation Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Smooth mouse parallax lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (watchGroupRef.current) {
        // Subtle floating motion + user drag rotation + mouse tilt
        const baseRotX = 0.12 + mouseRef.current.rotX + mouseRef.current.y * 0.15;
        const baseRotY = 0.25 + mouseRef.current.rotY + mouseRef.current.x * 0.25;

        watchGroupRef.current.rotation.x += (baseRotX - watchGroupRef.current.rotation.x) * 0.1;
        watchGroupRef.current.rotation.y += (baseRotY - watchGroupRef.current.rotation.y) * 0.1;
      }

      // Smooth exploded translation lerping
      const targetExplode = isExploded ? 1.0 : explodeProgress;
      currentExplodeRef.current += (targetExplode - currentExplodeRef.current) * 0.08;

      for (const part of explodedPartsRef.current) {
        part.mesh.position.lerpVectors(part.origPos, part.targetPos, currentExplodeRef.current);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [setIsLoading]);

  // Handle Real-Time Material Color Updates
  useEffect(() => {
    const matMap = customizableMaterialsRef.current;
    if (matMap.size === 0) return;

    const info = COLORWAYS[colorway];
    const metalColor = new THREE.Color(info.metalColor);
    const dialColor = new THREE.Color(info.dialColor);

    // Target materials defined in default-Bo472-CV.json
    const metalMaterials = [
      "metal-glossy-ext",
      "metal-brushed-ext",
      "metal-glossy",
      "metal-brushed",
      "metal-glossy-no-bake",
      "single-metal-brushed",
      "single-metal-glossy",
      "fs60p",
    ];

    metalMaterials.forEach((name) => {
      const mat = matMap.get(name);
      if (mat) {
        mat.color.copy(metalColor);
        mat.needsUpdate = true;
      }
    });

    const dialMat = matMap.get("dial");
    if (dialMat) {
      dialMat.color.copy(dialColor);
      dialMat.needsUpdate = true;
    }
  }, [colorway]);

  return (
    <div id="canvas-wrapper">
      <canvas ref={canvasRef} className="cursor-grab active:cursor-grabbing" />
    </div>
  );
}
