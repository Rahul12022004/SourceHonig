"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShippingContainer, { ContainerHandles } from "./ShippingContainer";

gsap.registerPlugin(ScrollTrigger);

export default function ContainerScene() {
  const containerRef = useRef<ContainerHandles>(null);

  useEffect(() => {
    const handles = containerRef.current;
    if (!handles) return;

    // Entry animation
    if (handles.group) {
      gsap.fromTo(
        handles.group.position,
        { x: 14 },
        { x: 0, duration: 1.6, ease: "expo.out", delay: 0.3 }
      );
      gsap.fromTo(
        handles.group.rotation,
        { y: -0.3 },
        { y: 0, duration: 1.6, ease: "expo.out", delay: 0.3 }
      );
    }

    // Scroll-driven door open
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "+=500",
      scrub: 1.5,
      onUpdate: (self) => {
        const p = self.progress;
        if (handles.leftDoor) handles.leftDoor.rotation.y = -2.27 * p;
        if (handles.rightDoor) handles.rightDoor.rotation.y = 2.27 * p;
        if (handles.interiorLight) handles.interiorLight.intensity = 4 * p;
        if (handles.group) handles.group.position.z = -1.5 * p;
      },
    });

    // Mouse parallax forwarded to container via window event
    const onMouse = (e: MouseEvent) => {
      if (!handles.group) return;
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = -(e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(handles.group.rotation, {
        y: nx * 0.05,
        x: ny * 0.03,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    window.addEventListener("mousemove", onMouse);

    return () => {
      st.kill();
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 1.5, 9], fov: 50 }}
      shadows
      style={{ background: "transparent" }}
      onCreated={({ scene }) => { scene.fog = new THREE.FogExp2(0x080808, 0.04); }}
    >
      <ambientLight intensity={0.25} />
      <spotLight
        position={[0, 10, 4]}
        color="#FF5500"
        intensity={2.5}
        angle={0.45}
        penumbra={0.6}
        castShadow
      />
      <spotLight
        position={[-8, 6, 2]}
        color="#00F0FF"
        intensity={0.4}
        angle={0.6}
        penumbra={1}
      />

      <ShippingContainer ref={containerRef} />
    </Canvas>
  );
}
