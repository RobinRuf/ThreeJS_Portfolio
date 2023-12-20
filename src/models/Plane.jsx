import planeScene from "../../assets/scenes/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = () => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
