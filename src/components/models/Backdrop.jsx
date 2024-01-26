import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { room_area } from "@/helpers/light-color-helper";

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
      scale={room_area}
      position={[0, -0.499, 0]}
      opacity={1}
      color={"white"}
    >
      <RandomizedLight
        amount={1}
        radius={10}
        intensity={3.9}
        ambient={0.5}
        position={[15, 5, -10]}
        color={"white"}
      />
    </AccumulativeShadows>
  );
}
