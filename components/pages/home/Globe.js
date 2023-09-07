import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader, DoubleSide } from 'three';

const RotatingGlobe = ({ mouse }) => {
  const sphereRef = useRef();
  const earthTexture = new TextureLoader().load('/uploads/images/globe/globe2.png');

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0025 * delta;

       const targetRotationX = (-mouse.current[1] - sphereRef.current.rotation.x) * 0.002; 
      const targetRotationY = (mouse.current[0] - sphereRef.current.rotation.y) * 0.002;

       sphereRef.current.rotation.x += targetRotationX * 0.005;  // Adjust the speed by modifying the factor (0.1)
      sphereRef.current.rotation.y += targetRotationY * 0.005; // Adjust the speed by modifying the factor (0.1)
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2.5, 128, 128]} />
      <meshPhongMaterial map={earthTexture} transparent opacity={0.8} side={DoubleSide} />
    </mesh>
  );
};

const Home = () => {
  const mouse = useRef([0, 0]);

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ width: '100vw', height: '100vh' }}
        onPointerMove={(e) => (mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2])}
        onTouchMove={(e) =>
          (mouse.current = [e.touches[0].clientX - window.innerWidth / 2, e.touches[0].clientY - window.innerHeight / 2])
        }
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingGlobe mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default Home;
