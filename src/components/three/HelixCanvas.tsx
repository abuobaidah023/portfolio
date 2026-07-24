"use client";

import { Suspense, useRef, useMemo, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type HelixSceneProps = {
  scrollProgressRef: React.MutableRefObject<number>;
};

function HelixStrand({ scrollProgressRef }: HelixSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const strandARef = useRef<THREE.InstancedMesh>(null);
  const strandBRef = useRef<THREE.InstancedMesh>(null);

  const { pointsA, pointsB } = useMemo(() => {
    const turns = 3.5;
    const height = 5;
    const radius = 0.55;
    const segments = 40;
    const a: THREE.Vector3[] = [];
    const b: THREE.Vector3[] = [];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;
      a.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
      b.push(
        new THREE.Vector3(
          Math.cos(angle + Math.PI) * radius,
          y,
          Math.sin(angle + Math.PI) * radius
        )
      );
    }
    return { pointsA: a, pointsB: b };
  }, []);

  useLayoutEffect(() => {
    const dummy = new THREE.Object3D();
    const setInstances = (mesh: THREE.InstancedMesh | null, points: THREE.Vector3[]) => {
      if (!mesh) return;
      points.forEach((p, i) => {
        dummy.position.copy(p);
        dummy.scale.setScalar(i % 3 === 0 ? 1.1 : 0.9);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
    };
    setInstances(strandARef.current, pointsA);
    setInstances(strandBRef.current, pointsB);
  }, [pointsA, pointsB]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const scroll = scrollProgressRef.current;
    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.12 + scroll * Math.PI * 2;
    groupRef.current.rotation.x = scroll * 0.35 - 0.1;
    groupRef.current.scale.setScalar(0.85 + scroll * 0.35);
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={strandARef} args={[undefined, undefined, pointsA.length]}>
        <sphereGeometry args={[0.05, 6, 6]} />
        <meshStandardMaterial color="#c9a962" metalness={0.55} roughness={0.4} />
      </instancedMesh>
      <instancedMesh ref={strandBRef} args={[undefined, undefined, pointsB.length]}>
        <sphereGeometry args={[0.05, 6, 6]} />
        <meshStandardMaterial color="#e4e4e7" metalness={0.35} roughness={0.5} />
      </instancedMesh>
    </group>
  );
}

function Scene({ scrollProgressRef }: HelixSceneProps) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]} intensity={0.55} color="#f4f4f5" />
      <pointLight position={[-3, 2, -2]} intensity={0.25} color="#c9a962" />
      <HelixStrand scrollProgressRef={scrollProgressRef} />
    </>
  );
}

type HelixCanvasProps = {
  scrollProgress: number;
  className?: string;
};

export function HelixCanvas({ scrollProgress, className = "" }: HelixCanvasProps) {
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  return (
    <div className={className}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <Scene scrollProgressRef={progressRef} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default HelixCanvas;
