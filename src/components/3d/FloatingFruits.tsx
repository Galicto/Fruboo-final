"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// ─── ORANGE ──────────────────────────────────────────────────────────────────
function Orange({ position, scale = 1, floatSpeed = 1.5, floatIntensity = 1.5 }: any) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (groupRef.current) groupRef.current.rotation.y += d * 0.2; });

  // Leaf shape using ShapeGeometry (works in R3F)
  const leafShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.1, 0.2, 0.3, 0.22, 0.4, 0);
    s.bezierCurveTo(0.3, -0.12, 0.1, -0.12, 0, 0);
    return s;
  }, []);

  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.6} position={position}>
      <group ref={groupRef} scale={scale}>
        {/* Body – orangey oblate sphere */}
        <mesh scale={[1, 0.93, 1]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#f97316" roughness={0.85} metalness={0} />
        </mesh>
        {/* Stem */}
        <mesh position={[0, 0.94, 0]}>
          <cylinderGeometry args={[0.055, 0.07, 0.22, 12]} />
          <meshStandardMaterial color="#4a3728" roughness={0.9} />
        </mesh>
        {/* Leaf */}
        <mesh position={[0.1, 1.05, 0]} rotation={[0, 0, -0.5]}>
          <shapeGeometry args={[leafShape]} />
          <meshStandardMaterial color="#16a34a" roughness={0.7} side={THREE.DoubleSide} />
        </mesh>
        {/* Navel */}
        <mesh position={[0, -0.93, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0, 0.15, 24]} />
          <meshStandardMaterial color="#c2410c" roughness={1} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
}

// ─── WATERMELON SLICE ────────────────────────────────────────────────────────
function WatermelonSlice({ position, scale = 1, floatSpeed = 1.2, floatIntensity = 2 }: any) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (groupRef.current) groupRef.current.rotation.y += d * 0.15; });

  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.8} position={position}>
      <group ref={groupRef} scale={scale}>
        {/* Green rind outer */}
        <mesh scale={[1.1, 1, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1, 1, 0.45, 48, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#15803d" roughness={0.7} side={THREE.DoubleSide} />
        </mesh>
        {/* White pith */}
        <mesh scale={[1.04, 1.01, 1.04]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1, 1, 0.45, 48, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#dcfce7" roughness={0.6} side={THREE.DoubleSide} />
        </mesh>
        {/* Red flesh */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1, 1, 0.45, 48, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#dc2626" roughness={0.5} side={THREE.DoubleSide} />
        </mesh>
        {/* Seeds */}
        {([ [-0.3, 0.01, -0.25], [0.1, 0.01, -0.55], [0.45, 0.01, -0.15], [-0.1, 0.01, -0.7], [0.6, 0.01, -0.5] ] as [number,number,number][]).map((pos, i) => (
          <mesh key={i} position={pos} rotation={[-Math.PI / 2, 0, i * 0.3]}>
            <planeGeometry args={[0.1, 0.05]} />
            <meshStandardMaterial color="#1c1917" roughness={0.9} side={THREE.DoubleSide} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// ─── LEMON ───────────────────────────────────────────────────────────────────
function Lemon({ position, scale = 1, floatSpeed = 2, floatIntensity = 1.8 }: any) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (groupRef.current) groupRef.current.rotation.z += d * 0.25; });
  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.7} position={position}>
      <group ref={groupRef} scale={scale}>
        {/* Egg-shaped body */}
        <mesh scale={[0.78, 1.18, 0.78]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#fde047" roughness={0.5} metalness={0.04} />
        </mesh>
        {/* Tip top */}
        <mesh position={[0, 1.13, 0]} scale={[0.2, 0.25, 0.2]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#ca8a04" roughness={0.7} />
        </mesh>
        {/* Tip bottom */}
        <mesh position={[0, -1.13, 0]} scale={[0.16, 0.2, 0.16]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#ca8a04" roughness={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

// ─── KIWI ────────────────────────────────────────────────────────────────────
function Kiwi({ position, scale = 1, floatSpeed = 1.8, floatIntensity = 1.4 }: any) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (groupRef.current) groupRef.current.rotation.y += d * 0.22; });

  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.5} position={position}>
      <group ref={groupRef} scale={scale}>
        {/* Fuzzy brown outer */}
        <mesh>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color="#78350f" roughness={1.0} />
        </mesh>
        {/* Green flesh ring on cut face */}
        <mesh position={[0, 0, 1.01]}>
          <ringGeometry args={[0.18, 0.94, 48]} />
          <meshStandardMaterial color="#4ade80" roughness={0.4} side={THREE.DoubleSide} />
        </mesh>
        {/* White core */}
        <mesh position={[0, 0, 1.02]}>
          <circleGeometry args={[0.18, 32]} />
          <meshStandardMaterial color="#fefce8" roughness={0.3} side={THREE.DoubleSide} />
        </mesh>
        {/* Seeds arranged in a ring */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 0.55;
          return (
            <mesh key={i} position={[Math.cos(angle) * r, Math.sin(angle) * r, 1.03]} rotation={[0, 0, angle]}>
              <planeGeometry args={[0.09, 0.036]} />
              <meshStandardMaterial color="#1c1917" side={THREE.DoubleSide} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

// ─── DRAGON FRUIT ────────────────────────────────────────────────────────────
function DragonFruit({ position, scale = 1, floatSpeed = 1.0, floatIntensity = 2.2 }: any) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (groupRef.current) groupRef.current.rotation.y += d * 0.18; });
  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.5} position={position}>
      <group ref={groupRef} scale={scale}>
        {/* Pink body */}
        <mesh scale={[1, 1.25, 1]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#ec4899" roughness={0.65} metalness={0.05} />
        </mesh>
        {/* Scaly protrusions */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.9, 0.3 + (i % 2) * 0.4, Math.sin(angle) * 0.9]}
              rotation={[0.4, angle, 0.2]}
              scale={[0.3, 0.55, 0.12]}
            >
              <sphereGeometry args={[1, 8, 8]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#86efac" : "#db2777"} roughness={0.6} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

// ─── SCENE ───────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={38} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[8, 8, 6]} intensity={2.5} />
      <directionalLight position={[-6, -4, -4]} intensity={0.6} color="#fbbf24" />
      <pointLight position={[0, 0, 8]} intensity={0.8} color="#ffffff" />
      <Environment preset="studio" />

      <Orange       position={[-6.5, 3.5, -2]}  scale={1.4} floatSpeed={1.4} floatIntensity={1.5} />
      <Kiwi         position={[6.2,  4.2, -4]}  scale={1.3} floatSpeed={1.9} floatIntensity={1.2} />
      <WatermelonSlice position={[-5.5,-4,-3]}  scale={1.6} floatSpeed={1.2} floatIntensity={1.8} />
      <Lemon        position={[5.5, -3.5, -1]}  scale={1.1} floatSpeed={2.2} floatIntensity={1.6} />
      <DragonFruit  position={[1,    6,   -9]}  scale={1.5} floatSpeed={1.0} floatIntensity={2.4} />
    </>
  );
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────
export function FloatingFruits() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
