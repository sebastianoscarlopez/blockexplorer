import React, { FunctionComponent } from "react";
import { FaceTransaction } from "./FaceTransaction";
import { BlockBox } from "./BlockBox";
import { Coords } from "../../definitions/Coords.d";

export const Transaction: FunctionComponent<{
  position: Coords;
  scale: number;
  hash: string;
}> = ({ position, scale, hash }) => {
  const [ratioScale, setRatioScale] = React.useState<number>(1);

  const handlerOnPointerEnter = (evt: { stopPropagation: () => void }) => {
    evt.stopPropagation();
    setRatioScale(4);
  };
  const handlerOnPointerLeave = () => {
    setRatioScale(1);
  };

  return (
    <group
      position={position}
      onPointerOver={handlerOnPointerEnter}
      onPointerOut={handlerOnPointerLeave}
    >
      <BlockBox scale={scale * ratioScale} color={`#${hash.substring(2, 8)}`}>
        <group
          onPointerOver={handlerOnPointerEnter}
          onPointerOut={handlerOnPointerLeave}
        >
          <FaceTransaction hash={hash} />
        </group>
      </BlockBox>
    </group>
  );
};
