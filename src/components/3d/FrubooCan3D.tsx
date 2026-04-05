"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, PerspectiveCamera, Cylinder } from "@react-three/drei";
import * as THREE from "three";

interface FrubooCan3DProps {
  size: "regular" | "large";
  autoRotate?: boolean;
}

function CanMesh({ heightScale }: { heightScale: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
    }
  });

  const bodyH = 2.2 * heightScale;
  const r = 0.55;

  return (
    <group ref={groupRef}>
      {/* Main can body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[r, r * 0.96, bodyH, 64]} />
        <meshPhysicalMaterial
          color="#111111"
          metalness={0.95}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.05}
          reflectivity={1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Orange label band */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[r + 0.001, r * 0.96 + 0.001, bodyH * 0.65, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#ff7a00"
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* FRUBOO text ring — thin green stripe */}
      <mesh position={[0, bodyH * 0.1, 0]}>
        <cylinderGeometry args={[r + 0.002, r * 0.96 + 0.002, 0.06, 64, 1, true]} />
        <meshStandardMaterial color="#22c55e" metalness={0.5} roughness={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Top cap */}
      <mesh position={[0, bodyH / 2, 0]}>
        <cylinderGeometry args={[r * 0.9, r, 0.08, 64]} />
        <meshPhysicalMaterial metalness={0.9} roughness={0.1} color="#cccccc" />
      </mesh>
      {/* Top dome */}
      <mesh position={[0, bodyH / 2 + 0.08, 0]}>
        <cylinderGeometry args={[r * 0.72, r * 0.9, 0.12, 64]} />
        <meshPhysicalMaterial metalness={0.9} roughness={0.1} color="#bbbbbb" />
      </mesh>
      {/* Pull tab */}
      <mesh position={[r * 0.3, bodyH / 2 + 0.18, 0]} rotation={[0.3, 0, 0]}>
        <torusGeometry args={[0.1, 0.025, 8, 20, Math.PI * 1.5]} />
        <meshPhysicalMaterial metalness={0.95} roughness={0.05} color="#cccccc" />
      </mesh>

      {/* Bottom cap */}
      <mesh position={[0, -bodyH / 2, 0]}>
        <cylinderGeometry args={[r * 0.9, r, 0.06, 64]} />
        <meshPhysicalMaterial metalness={0.9} roughness={0.1} color="#aaaaaa" />
      </mesh>

      {/* Condensation droplets (spheres scattered on body) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const y = (Math.random() - 0.5) * bodyH * 0.5;
        return (
          <mesh key={i} position={[Math.cos(angle) * (r + 0.01), y, Math.sin(angle) * (r + 0.01)]}>
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.25}
              roughness={0.1}
              transmission={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function FrubooCan3D({ size, autoRotate = true }: FrubooCan3DProps) {
  const heightScale = size === "large" ? 1.3 : 1.0;

  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={32} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 3]} intensity={3} color="#ffffff" />
      <directionalLight position={[-3, -2, -2]} intensity={1} color="#ff7a00" />
      <pointLight position={[0, 2, 2]} intensity={1.5} color="#22c55e" />
      <Environment preset="studio" />
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        <CanMesh heightScale={heightScale} />
      </Float>
    </Canvas>
  );
}
