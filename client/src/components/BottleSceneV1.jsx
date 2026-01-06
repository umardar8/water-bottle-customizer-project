import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GeometricBottle = ({ textureData }) => {
  const meshRef = useRef();

  // Load the user's design
  const texture = new THREE.TextureLoader().load(
    textureData || 'https://via.placeholder.com/500x250?text=Design+Here'
  );
  
  // Fix texture mapping for a cylinder
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = 1; // Mirror horizontally so text reads correctly
  texture.offset.x = 0; // Adjust starting point if needed

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.1; // Slow rotation
  });

  return (
    <group ref={meshRef} position={[0, -1.5, 0]}>
      
      {/* 1. THE BOTTLE BODY (Clear Plastic) */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[1, 1, 3.5, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={0.9} // Glass-like transparency
          opacity={0.5}
          roughness={0.1}
          metalness={0.1}
          transparent={true}
        />
      </mesh>

      {/* 2. THE LABEL (Wrapped around the body) 
          Radius is 1.01 (slightly larger than bottle 1.0) to prevent glitching */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[1.01, 1.01, 1.8, 32, 1, true]} /> 
        {/* 'true' at the end makes it an open-ended tube (no top/bottom caps) */}
        <meshStandardMaterial 
          map={texture} 
          transparent={true} 
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3. THE CAP */}
      <mesh position={[0, 3.4, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#004080" roughness={0.3} />
      </mesh>
      
      {/* 4. WATER INSIDE (Optional - Inner blue cylinder) */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 2.8, 32]} />
        <meshBasicMaterial color="#aaddff" transparent opacity={0.3} />
      </mesh>

    </group>
  );
};

const BottleSceneV1 = ({ textureData }) => {
  return (
    <div className="h-[400px] w-full bg-gray-100 rounded-lg shadow-inner">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Environment Map makes the plastic look shiny/reflective */}
        <Environment preset="city" />

        <GeometricBottle textureData={textureData} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default BottleSceneV1;