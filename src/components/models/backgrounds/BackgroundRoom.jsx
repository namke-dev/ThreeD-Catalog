import {
  room_area,
  room_floor_color,
  room_wall_color,
} from "@/helpers/light-color-helper";
import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from "three";

export default function BackgroundRoom() {
  const [roughness, normal] = useLoader(THREE.TextureLoader, [
    "textures/terrain-roughness.jpg",
    "textures/terrain-normal.jpg",
  ]);

  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = THREE.RepeatWrapping;
      t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(5, 5);
      t.offset.set(0, 0);
    });

    // normal.encoding = THREE.LinearEncoding;
    // roughness.encoding = THREE.LinearEncoding;
  }, [normal, roughness]);

  return (
    <group>
      {/* Floor */}
      <mesh
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[room_area, room_area]} />
        {/* <meshPhysicalMaterial {...floorTextureProps} /> */}
        <MeshReflectorMaterial
          envMapIntensity={0}
          normalMap={normal}
          normalScale={[0.15, 0.15]}
          roughnessMap={roughness}
          dithering={true}
          color={[0.015, 0.015, 0.015]}
          roughness={0.7}
          blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
          mixBlur={1} // How much blur mixes with surface roughness (default = 1)
          mixStrength={80} // Strength of the reflections
          mixContrast={1} // Contrast of the reflections
          resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
          minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
          maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
          depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
          debug={0}
          reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
        />
      </mesh>

      <mesh
        position={[-5, 1.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <planeGeometry args={[room_area, 4]} />
        <meshPhysicalMaterial color={room_wall_color} />
      </mesh>

      {/*
      <mesh position={[0, 1.5, -room_area / 2]}>
        <planeGeometry args={[room_area, 4]} />
        <meshBasicMaterial color={room_wall_color} />
      </mesh>
      <mesh position={[0, 1.5, room_area / 2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[room_area, 4]} />
        <meshBasicMaterial color={room_wall_color} />
      </mesh> */}
    </group>
  );
}
