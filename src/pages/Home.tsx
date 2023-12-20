import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Simulates the sunlight */}
          <directionalLight position={[3, 1, 1]} intensity={2} />
          {/* Illuminates all elementes in the scene equaly without casting shadows (so no position needed) */}
          <ambientLight intensity={0.5} />
          {/* Illuminates the scene with a gradient (used for more detailed scene view) */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
