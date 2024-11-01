import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.000001;
            meshRef.current.rotation.y += 0.000001;
        }
    });
    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            {/* <cylinderGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={0x468568} emissive={0x468568} /> */}

            <Sparkles
                count={100000}
                scale={100}
                size={1}
                speed={0.0000000001}
                color="white"
            />
        </mesh>
    );
};

const App = () => {
    return (
        <Canvas
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
            }}
        >
            <OrbitControls enableZoom enablePan enableRotate />
            <directionalLight
                color={0x9cdba6}
                intensity={10}
                position={[1, 1, 1]}
            />
            <color attach="background" args={["#111111"]} />

            <RotatingCube />
        </Canvas>
    );
};

export default App;
