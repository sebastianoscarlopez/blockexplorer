import React, { useEffect, useState } from "react";
import { MeshProps } from "@react-three/fiber";
import { Text } from "@react-three/drei";

import useBlock from "../../hooks/useBlock";
import { BlockBox } from "./BlockBox";
import { Coords } from "../../definitions/Coords.d";
import { Transaction } from "./Transaction";

interface BlockProps extends MeshProps {
  blockNumber: number;
}

function Block({ blockNumber, ...meshProps }: BlockProps) {
  const { blockData } = useBlock(blockNumber);

  const [blockColor, setBlockColor] = useState("gray");

  useEffect(() => {
    if (blockData?.hash) {
      setBlockColor(`#${blockData.hash.substring(2, 8)}`);
    }
  }, [blockData?.hash]);

  const totalTransactions = blockData?.transactions.length || 0;
  const rows = Math.ceil(Math.sqrt(totalTransactions));
  const cols = Math.ceil(totalTransactions / rows);
  const getRowCol = (index: number) => ({
    row: Math.floor(index / cols),
    col: index % cols,
  });
  const getPosition = (index: number) => {
    const { col, row } = getRowCol(index);
    const dist = 1 / rows;

    const position: Coords = [
      -dist * (cols / 2) + dist / 2 + dist * col,
      dist * (rows / 2) - dist / 2 - dist * row,
      0.5,
    ];
    return position;
  };

  const ySize = rows / cols;

  return (
    <mesh {...meshProps}>
      <BlockBox scale={[1, ySize, 1]} color={blockColor}>
        <Text
          position={[0, 0.501, -0.125]}
          rotation={[Math.PI / -2, 0, 0]}
          fontSize={0.15}
          color="cyan"
          anchorX="center"
          anchorY="middle"
          outlineColor={"white"}
          outlineWidth={0.003}
        >
          {blockNumber}
        </Text>
        {blockData && (
          <Text
            position={[0, 0.501, 0.125]}
            rotation={[Math.PI / -2, 0, 0]}
            fontSize={0.1}
            color="cyan"
            anchorX="center"
            anchorY="middle"
            outlineColor={"white"}
            outlineWidth={0.003}
          >
            {blockData.hash.substring(0, 8)}...
          </Text>
        )}
      </BlockBox>
      {blockData &&
        blockData.transactions.map(({ hash }, index) => (
          <Transaction
            position={getPosition(index)}
            scale={1 / rows - 0.01}
            hash={hash}
          />
        ))}
    </mesh>
  );
}

export default Block;
