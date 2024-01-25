import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function CustomBackdrop() {
  const shadows = useRef();
  useFrame((state, delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      state.color,
      0.25,
      delta
    )
  );
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={9}
      position={[0, -0.5, 0]}
    >
      <RandomizedLight
        amount={2}
        radius={9}
        intensity={0.25}
        ambient={0.25}
        position={[5, 5, -10]}
        // bias={0.5}
      />
      <RandomizedLight
        amount={2}
        radius={5}
        intensity={0.55}
        ambient={0.5}
        position={[-5, 5, -9]}
        // bias={0.5}
      />
    </AccumulativeShadows>
  );
}
