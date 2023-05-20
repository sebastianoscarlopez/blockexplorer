import React, { FunctionComponent, PropsWithChildren } from "react";
import { RoundedBox } from "@react-three/drei";
import { Coords } from "../../definitions/Coords.d";

export const BlockBox: FunctionComponent<
  PropsWithChildren<{ scale?: number | Coords; color: string }>
> = ({ children, scale, color }) => (
  <RoundedBox scale={scale} args={[1, 1, 1]} radius={0.05} creaseAngle={0.4}>
    <meshPhysicalMaterial color={color} metalness={0.7} roughness={0.7} />
    {children}
  </RoundedBox>
);
