import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const RealisticBottle = ({ textureData }) => {
  const meshRef = useRef();

  // 1. Create the Bottle Shape Profile (Half silhouette)
  const bottleProfile = useMemo(() => {
    const points = [];
    // (X = width, Y = height)
    
    // Bottom Base (Rounded)
    points.push(new THREE.Vector2(0, 0));       // Center bottom
    points.push(new THREE.Vector2(0.7, 0));     // Flat bottom
    points.push(new THREE.Vector2(0.9, 0.1));   // Bottom curve corner
    points.push(new THREE.Vector2(0.95, 0.3));  // Start of vertical body

    // Main Body (Straight)
    points.push(new THREE.Vector2(0.95, 2.2));  // Top of printable area

    // Shoulder (Curved inwards)
    points.push(new THREE.Vector2(0.9, 2.4));   // Start curving in
    points.push(new THREE.Vector2(0.3, 2.9));   // Neck base
    
    // Neck & Lip
    points.push(new THREE.Vector2(0.3, 3.2));   // Neck top
    points.push(new THREE.Vector2(0.35, 3.25)); // Lip out
    points.push(new THREE.Vector2(0.35, 3.35)); // Lip top
    points.push(new THREE.Vector2(0.3, 3.35));  // Lip in (top opening)

    return points;
  }, []);

  // 2. Load User Texture
  const texture = useMemo(() => 
    new THREE.TextureLoader().load(textureData || 'https://via.placeholder.com/500x250?text=Design+Here'),
  [textureData]);
  
  // Fix texture mapping
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = 1; 
  texture.offset.x = 0;

  useFrame((state, delta) => {
    if(meshRef.current) meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={meshRef} position={[0, -1.8, 0]} scale={1.2}>
      
      {/* A. THE BOTTLE BODY (Lathe Geometry = Spun Shape) */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[bottleProfile, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={0.95}  // High transparency
          opacity={0.6}
          roughness={0.05}     // Shiny plastic
          metalness={0.1}
          clearcoat={0.8}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* B. THE LABEL SLEEVE 
          We use a simple cylinder for the label so the text doesn't warp on the curves.
          Positioned slightly wider (0.96) than the body (0.95) to sit on top.
      */}
      <mesh position={[0, 1.25, 0]}>
        {/* Radius Top, Radius Bottom, Height, Segments, OpenEnded */}
        <cylinderGeometry args={[0.96, 0.96, 1.9, 64, 1, true]} />
        <meshStandardMaterial 
          map={texture} 
          transparent={true} 
          side={THREE.DoubleSide}
          roughness={0.3}
        />
      </mesh>

      {/* C. THE CAP (Blue Plastic) */}
      <mesh position={[0, 3.45, 0]}>
        <cylinderGeometry args={[0.32, 0.32, 0.3, 32]} />
        <meshStandardMaterial color="#004080" roughness={0.2} />
      </mesh>
      
      {/* D. WATER LIQUID (Inside) */}
      <mesh position={[0, 1.2, 0]}>
         {/* Slightly smaller width than bottle to avoid "Z-fighting" glitch */}
        <cylinderGeometry args={[0.90, 0.90, 2.2, 32]} />
        <meshBasicMaterial color="#aaddff" transparent opacity={0.3} />
      </mesh>

    </group>
  );
};

const BottleSceneV3 = ({ textureData }) => {
  return (
    <div className="h-[500px] w-full bg-gray-100 rounded-3xl shadow-inner border border-gray-200 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} shadows>
        {/* Lighting Setup for Realism */}
        <ambientLight intensity={0.8} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.5} 
          castShadow 
        />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="white" />
        
        {/* Environment Reflection (Makes plastic look shiny) */}
        <Environment preset="warehouse" />

        <RealisticBottle textureData={textureData} />
        
        <OrbitControls enableZoom={true} minDistance={4} maxDistance={12} />
      </Canvas>
    </div>
  );
};

export default BottleSceneV3;