import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 1. The Real Bottle Component
const RealBottle = ({ textureData }) => {
  const { nodes, materials } = useGLTF('/bottle.gltf'); // Load from public folder
  const meshRef = useRef();

  // 2. Prepare the User's Design Texture
  const customTexture = new THREE.TextureLoader().load(
    textureData || 'https://via.placeholder.com/500x250?text=Design+Here'
  );
  
  // Flip texture if it appears upside down (common issue)
  customTexture.flipY = false; 

  return (
    <group dispose={null} position={[0, -1.5, 0]} scale={20}> 
      {/* NOTE: 'nodes.Bottle' and 'nodes.Label_Area' are examples. 
         Check your generated Bottle.jsx to see the real names of your meshes!
      */}

      {/* The Plastic Bottle Body (Transparent) */}
      <mesh 
        geometry={nodes.Bottle_Body.geometry} 
        material={materials.Clear_Plastic} 
      >
        <meshPhysicalMaterial 
          transmission={1}  // Glass-like transparency
          roughness={0.1} 
          thickness={1}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* The Cap */}
      <mesh 
        geometry={nodes.Cap.geometry} 
        material={materials.Blue_Plastic} 
      />

      {/* THE LABEL MESH - This is where the magic happens */}
      <mesh geometry={nodes.Label_Area.geometry}>
        <meshStandardMaterial 
          map={customTexture} 
          roughness={0.4} 
          side={THREE.DoubleSide} // Ensure it shows on both sides if thin
        />
      </mesh>
    </group>
  );
};

const BottleSceneV2 = ({ textureData }) => {
  return (
    <div className="h-[400px] w-full bg-gray-200 rounded-lg shadow-inner">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Lighting to make plastic look real */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        {/* Environment map for realistic reflections on plastic */}
        <Environment preset="warehouse" />

        <RealBottle textureData={textureData} />
        
        <OrbitControls enableZoom={true} minDistance={5} maxDistance={15} />
      </Canvas>
    </div>
  );
};

export default BottleSceneV2;