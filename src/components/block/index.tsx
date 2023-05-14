import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";

import { MeshStandardMaterial, Mesh } from "three";

interface BlockProps extends MeshProps {
  blockNumber: number;
  color: string;
}

function Block({ blockNumber, color, ...meshProps }: BlockProps) {
  const ref = useRef<Mesh>(null!);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // useFrame((state, delta) => (ref.current.rotation.x += delta * 0.3));

  const blackMaterial = new MeshStandardMaterial({ color: "black" });

  return (
    <mesh
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      {...meshProps}
    >
      <RoundedBox args={[1, 1, 1]} radius={0.05} creaseAngle={0.4}>
        <meshPhysicalMaterial color={color} metalness={0.7} roughness={0.7} />
        <Text
          position={[0, 0, 0.501]}
          fontSize={0.15}
          color="cyan"
          anchorX="center"
          anchorY="middle"
          outlineColor={"white"}
          outlineWidth={0.003}
        >
          {blockNumber}
        </Text>
      </RoundedBox>
    </mesh>
  );
}

export default Block;
