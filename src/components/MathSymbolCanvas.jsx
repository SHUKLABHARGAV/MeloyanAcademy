import { Canvas } from "@react-three/fiber";
import MathSymbol3D from "./MathSymbol3D";

const MathSymbolCanvas = () => {
  return (
    <div style={{ width: "150px", height: "150px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <MathSymbol3D />
      </Canvas>
    </div>
  );
};

export default MathSymbolCanvas;
