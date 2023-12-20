import planeScene from "../../assets/scenes/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
