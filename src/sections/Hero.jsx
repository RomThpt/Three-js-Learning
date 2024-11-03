import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo.jsx";
import SolidityLogo from "../components/SolidityLogo.jsx";

const Hero = () => {
    // const controls = useControls("HackerRoom", {
    //     positionX: { value: 2.5, min: -10, max: 10 },
    //     positionY: { value: 2.5, min: -10, max: 10 },
    //     positionZ: { value: 2.5, min: -10, max: 10 },
    //     rotationX: { value: 0, min: -10, max: 10 },
    //     rotationY: { value: 0, min: -10, max: 10 },
    //     protation: { value: 0, min: -10, max: 10 },
    //     scale: { value: 0.075, min: 0.01, max: 1 },
    // });
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col  sm:mt-36 mt20 c-space gap3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hello, Im Romain<span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building products and brand
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className="w-full h-full ">
                    <Suspense fallback={CanvasLoader}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HackerRoom
                            // scale={0.075}
                            position={sizes.deskPosition}
                            rotation={[0, Math.PI, 0]}
                            scale={sizes.deskScale}
                        />
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <SolidityLogo
                                position={sizes.solidityLogoPosition}
                            />
                        </group>
                        <ambientLight intensity={1000} />
                        <directionalLight
                            intensity={0.5}
                            position={[10, 10, 10]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
