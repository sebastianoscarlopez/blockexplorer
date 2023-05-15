import React, { FunctionComponent, PropsWithChildren } from "react";
import { Text } from "@react-three/drei";

export const FaceTransaction: FunctionComponent<
  PropsWithChildren<{ hash: string }>
> = ({ hash, children }) => {
  return (
    <>
      <Text
        position={[0, 0, 0.501]}
        fontSize={0.15}
        color="cyan"
        anchorX="center"
        anchorY="middle"
        outlineColor={"white"}
        outlineWidth={0.003}
      >
        {hash.substring(0, 8)}...
      </Text>
      {children}
    </>
  );
};
