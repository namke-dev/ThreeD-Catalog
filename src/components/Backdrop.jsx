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
      position={[0, -0.499, 0]}
      opacity={0.95}
    >
      <RandomizedLight
        amount={1}
        radius={10}
        intensity={2.2}
        ambient={0.8}
        position={[15, 5, -10]}
      />
    </AccumulativeShadows>
  );
}
