export default function Home() {
  return (
    <div id="app">
      <div id="loader">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 700 700">
          <path
            strokeOpacity="1"
            stroke="#DCDCDC"
            d="M350 695c190.538 0 345-154.462 345-345S540.538 5 350 5 5 159.462 5 350s154.462 345 345 345Z"
          />
          <path
            className="progress-arc"
            strokeOpacity="1"
            strokeWidth="3"
            stroke="#D3D3D3"
            d="M350 695c190.538 0 345-154.462 345-345S540.538 5 350 5 5 159.462 5 350s154.462 345 345 345Z"
          />
        </svg>
        <div>
          <span>Now</span> loading
        </div>
      </div>
      <div id="canvas-wrapper"></div>
      <div id="root"></div>
    </div>
  );
}
