"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface ContainerHandles {
  leftDoor: THREE.Group | null;
  rightDoor: THREE.Group | null;
  group: THREE.Group | null;
  interiorLight: THREE.PointLight | null;
}

const metalMat = new THREE.MeshStandardMaterial({
  color: "#151515",
  metalness: 0.92,
  roughness: 0.28,
});
const doorMat = new THREE.MeshStandardMaterial({
  color: "#0d0d0d",
  metalness: 0.95,
  roughness: 0.18,
});
const ridgeMat = new THREE.MeshStandardMaterial({
  color: "#1e1e1e",
  metalness: 0.85,
  roughness: 0.4,
});

const ShippingContainer = forwardRef<ContainerHandles>((_, ref) => {
  const groupRef = useRef<THREE.Group>(null!);
  const leftDoorRef = useRef<THREE.Group>(null!);
  const rightDoorRef = useRef<THREE.Group>(null!);
  const interiorLightRef = useRef<THREE.PointLight>(null!);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });

  useImperativeHandle(ref, () => ({
    get leftDoor() { return leftDoorRef.current; },
    get rightDoor() { return rightDoorRef.current; },
    get group() { return groupRef.current; },
    get interiorLight() { return interiorLightRef.current; },
  }));

  useFrame(() => {
    mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.05;
    mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.05;
    if (groupRef.current) {
      groupRef.current.rotation.y = mouseCurrent.current.x * 0.05;
      groupRef.current.rotation.x = mouseCurrent.current.y * 0.03;
    }
  });

  // expose mouse setter on group userData
  const onMouseMove = (e: THREE.Event) => {
    const evt = e as unknown as MouseEvent;
    mouseTarget.current.x = (evt.clientX / window.innerWidth - 0.5) * 2;
    mouseTarget.current.y = -(evt.clientY / window.innerHeight - 0.5) * 2;
  };

  const ridges = Array.from({ length: 18 }, (_, i) => i);

  return (
    <group ref={groupRef}>
      {/* BODY */}
      <mesh material={metalMat} castShadow receiveShadow>
        <boxGeometry args={[8, 2.6, 2.6]} />
      </mesh>

      {/* HORIZONTAL RIDGES */}
      {ridges.map((i) => (
        <mesh
          key={i}
          material={ridgeMat}
          position={[0, -1.2 + i * 0.14, 0]}
        >
          <boxGeometry args={[8.01, 0.04, 2.63]} />
        </mesh>
      ))}

      {/* CORNER POSTS */}
      {([-3.96, 3.96] as const).map((x) =>
        ([-1.3, 1.3] as const).map((z) => (
          <mesh key={`${x}${z}`} position={[x, 0, z]} material={ridgeMat}>
            <boxGeometry args={[0.08, 2.64, 0.08]} />
          </mesh>
        ))
      )}

      {/* LEFT DOOR GROUP — pivot at x=-3.95, z=+1.33 */}
      <group ref={leftDoorRef} position={[-3.95, 0, 1.33]}>
        <mesh material={doorMat} position={[1.975, 0, 0.035]}>
          <boxGeometry args={[3.88, 2.5, 0.06]} />
        </mesh>
        {/* door ridges vertical */}
        {[-1.4, -0.5, 0.4, 1.3].map((x) => (
          <mesh key={x} material={ridgeMat} position={[1.975 + x, 0, 0.07]}>
            <boxGeometry args={[0.04, 2.48, 0.02]} />
          </mesh>
        ))}
      </group>

      {/* RIGHT DOOR GROUP — pivot at x=+3.95, z=+1.33 */}
      <group ref={rightDoorRef} position={[3.95, 0, 1.33]}>
        <mesh material={doorMat} position={[-1.975, 0, 0.035]}>
          <boxGeometry args={[3.88, 2.5, 0.06]} />
        </mesh>
        {[-1.3, -0.4, 0.5, 1.4].map((x) => (
          <mesh key={x} material={ridgeMat} position={[-1.975 + x, 0, 0.07]}>
            <boxGeometry args={[0.04, 2.48, 0.02]} />
          </mesh>
        ))}
      </group>

      {/* INTERIOR — visible when doors open */}
      <mesh position={[0, 0, 1.28]}>
        <planeGeometry args={[7.8, 2.4]} />
        <meshStandardMaterial color="#001a1a" emissive="#00F0FF" emissiveIntensity={0} />
      </mesh>

      {/* INTERIOR POINT LIGHT */}
      <pointLight
        ref={interiorLightRef}
        position={[0, 0, 0.8]}
        color="#00F0FF"
        intensity={0}
        distance={6}
      />
    </group>
  );
});

ShippingContainer.displayName = "ShippingContainer";
export default ShippingContainer;
