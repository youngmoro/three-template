import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Element from "./Element";

function App() {
  return (
    <div className="App">
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src="/react.svg" className="logo react" alt="React logo" />
        <img src="/three.png" className="logo" alt="Three logo" />
        <h2>Vite + React + Three Canvas</h2>
      </div>
      <div className="canvas">
        <Canvas className="canvas">
          <mesh>
            {/* <sphereGeometry /> */}
            {/* <meshStandardMaterial wireframe={true} /> */}
            <Sky />
          </mesh>
          <Element />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
