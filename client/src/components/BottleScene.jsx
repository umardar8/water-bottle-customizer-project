import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const RealisticBottle = ({ textureData, capColor }) => {
  const meshRef = useRef();

  const bottleProfile = useMemo(() => {
    const points = [];
    // (X = width/radius, Y = height)
    
    // Bottom Base (Rounded but tighter)
    points.push(new THREE.Vector2(0, -0.9));        // Center bottom
    points.push(new THREE.Vector2(0.7, -0.9));      // Flat bottom
    points.push(new THREE.Vector2(0.8, -0.55));     // Curve out
    points.push(new THREE.Vector2(0.8, -0.2));      // Lower Body

    // Main Body (Tapered Slim Section)
    points.push(new THREE.Vector2(0.76, 0));        // Waist Start
    
    // Shoulder (Gentle slope up to neck)
    points.push(new THREE.Vector2(0.75, 1.8));      // Waist End / Shoulder Start
    points.push(new THREE.Vector2(0.8, 2.1));       // Shoulder Mid
    points.push(new THREE.Vector2(0.8, 2.25));      // Neck Base

    // Neck & Lip
    points.push(new THREE.Vector2(0.60, 2.5));      // Neck top
    points.push(new THREE.Vector2(0.28, 2.75));     // Lip out
    points.push(new THREE.Vector2(0.38, 2.7));      // Lip top
    points.push(new THREE.Vector2(0.32, 2.75));     // Lip in

    return points;
  }, []);

  const texture = useMemo(() => 
    new THREE.TextureLoader().load(textureData || '/src/assets/sampleLabels/sampleLabel1.png'),
  [textureData]);
  
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = 1; 

  useFrame((state, delta) => {
    if(meshRef.current) meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={meshRef} position={[0, -1.2, 0]} scale={1.3}>
      
      {/* Bottle Body */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[bottleProfile, 64]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={0.95} 
          opacity={0.6}
          roughness={0.05} 
          metalness={0.1}
          clearcoat={0.8}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Label Sleeve */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.77, 0.77, 1.3, 64, 1, true]} />
        <meshStandardMaterial 
          map={texture} 
          transparent={false} 
          side={THREE.DoubleSide}
          roughness={0.3}
        />
      </mesh>

      {/* Cap - Now uses dynamic color */}
      <mesh position={[0, 2.85, 0]}>
        <cylinderGeometry args={[0.33, 0.33, 0.25, 32]} />
        <meshStandardMaterial color={capColor} roughness={0.2} />
      </mesh>
      
      {/* Liquid */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.74, 0.74, 1.8, 32]} />
        <meshBasicMaterial color="#aaddff" transparent opacity={0.9} />
      </mesh>

    </group>
  );
};

// 2. Pass 'capColor' from parent to RealisticBottle
const BottleScene = ({ textureData, capColor = "#020f1b" }) => {
  return (
    <div className="h-[500px] w-full bg-gray-100 rounded-3xl shadow-inner border border-gray-200 overflow-hidden relative">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} shadows>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -5, -10]} intensity={0.5} />
        <Environment preset="warehouse" />
        {/* Pass the prop down */}
        <RealisticBottle textureData={textureData} capColor={capColor} />
        <OrbitControls enableZoom={true} minDistance={4} maxDistance={12} />
      </Canvas>
    </div>
  );
};

export default BottleScene;