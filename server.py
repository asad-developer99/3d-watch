#!/usr/bin/env python3
"""
Lightweight development server for FS 60P Watch clone.
Handles proper MIME types for 3D GLB models, EXR HDR textures, WOFF2 fonts,
and SPA routing.
"""

import http.server
import socketserver
import mimetypes
import os
import sys
import argparse

# Register explicit MIME types for 3D, textures, and fonts
mimetypes.init()
mimetypes.add_type("model/gltf-binary", ".glb")
mimetypes.add_type("model/gltf+json", ".gltf")
mimetypes.add_type("image/x-exr", ".exr")
mimetypes.add_type("image/vnd.radiance", ".hdr")
mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("font/woff", ".woff")
mimetypes.add_type("font/ttf", ".ttf")
mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("text/javascript", ".mjs")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("application/json", ".json")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for local cross-origin asset loading if needed
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        # SPA routing fallback: if path does not exist and has no extension, serve index.html
        path = self.translate_path(self.path)
        if not os.path.exists(path) and "." not in os.path.basename(self.path):
            self.path = "/index.html"
        try:
            return super().do_GET()
        except (BrokenPipeError, ConnectionResetError):
            pass

def run(port=8000, host="0.0.0.0"):
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer((host, port), CustomHandler) as httpd:
        print(f"==================================================")
        print(f" FS 60P 3D Watch Showcase Server Running")
        print(f" Local URL:   http://localhost:{port}")
        print(f" Network URL: http://{host}:{port}")
        print(f" Serving directory: {web_dir}")
        print(f" Press Ctrl+C to stop.")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Serve the 3D Watch clone locally.")
    parser.add_argument("--port", "-p", type=int, default=8000, help="Port to listen on (default: 8000)")
    parser.add_argument("--host", "-H", type=str, default="0.0.0.0", help="Host interface to bind to (default: 0.0.0.0)")
    args = parser.parse_args()
    run(port=args.port, host=args.host)
