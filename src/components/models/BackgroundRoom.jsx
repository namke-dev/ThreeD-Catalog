import {
  room_area,
  room_floor_color,
  room_wall_color,
} from "@/helpers/light-color-helper";
import { MeshReflectorMaterial } from "@react-three/drei";
import React from "react";

export default function BackgroundRoom() {
  return (
    <group>
      <mesh
        position={[-4, 1.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <planeGeometry args={[room_area, 4]} />
        {/* <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mixBlur={0.5}
          mixStrength={1.3}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color={room_wall_color}
          metalness={0}
        /> */}
        <meshPhysicalMaterial color={room_wall_color} />
      </mesh>
      <mesh position={[0, 1.5, -room_area / 2]}>
        <planeGeometry args={[room_area, 4]} />
        <meshBasicMaterial color={room_wall_color} />
      </mesh>
      <mesh position={[0, 1.5, room_area / 2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[room_area, 4]} />
        <meshBasicMaterial color={room_wall_color} />
      </mesh>
      <mesh
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[room_area, room_area]} />
        <meshPhysicalMaterial color={room_floor_color} />
      </mesh>
    </group>
  );
}
