import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const BottleMesh = ({ textureData }) => {
  const meshRef = useRef();

  // Create a texture from the Base64 image data passed from the editor
  const texture = new THREE.TextureLoader().load(textureData || 'https://via.placeholder.com/500x250?text=Design+Here');
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1; // Fix mirroring if needed

  useFrame((state, delta) => {
    // Slow auto-rotation
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Bottle Body - Cylinder */}
      <mesh ref={meshRef} position={[0, 1.5, 0]}>
        <cylinderGeometry args={[1, 1, 3.5, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      
      {/* Bottle Cap - Simple Cylinder */}
      <mesh position={[0, 3.4, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#004080" roughness={0.3} />
      </mesh>
    </group>
  );
};

const BottleScene = ({ textureData }) => {
  return (
    <div className="h-[400px] w-full bg-gray-100 rounded-lg shadow-inner">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <BottleMesh textureData={textureData} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default BottleScene;