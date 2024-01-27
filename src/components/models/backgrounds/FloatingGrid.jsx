import { room_area } from "@/helpers/light-color-helper";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

export function FloatingGrid() {
  const diffuse = useLoader(TextureLoader, "textures/grid-texture.png");

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping;
    diffuse.wrapT = RepeatWrapping;
    diffuse.anisotropy = 4;
    diffuse.repeat.set(room_area * 3, room_area * 3);
    diffuse.offset.set(0, 0);
  }, [diffuse]);

  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} position={[0, -0.499, 0]}>
        <planeGeometry args={[room_area, room_area]} />
        <meshBasicMaterial
          color="#333333"
          opacity={0.15}
          map={diffuse}
          alphaMap={diffuse}
          transparent={true}
        />
      </mesh>
    </>
  );
}
