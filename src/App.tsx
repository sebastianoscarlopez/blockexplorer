import React from "react";
import { Canvas } from "@react-three/fiber";
import Block from "./components/block";
import { OrbitControls, Stats } from "@react-three/drei";

import "./App.css";
import useBlock from "./hooks/useBlock";
import { degreesToRadians } from "./utils/mathHelpers";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  // const { lastBlockNumber } = useBlock(0);

  const lastBlockNumber = 17264939;

  const gap = 0.1;

  // Green block: #22A83F
  // Red block: #A82222
  // Blue block: #429FC8
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        {lastBlockNumber && (
          <group rotation={[degreesToRadians(50), 0, 0]} position={[0, 0, 3]}>
            <Block position={[-1 - gap, 0, 0]} blockNumber={lastBlockNumber} />
            <Block position={[0, 0, 0]} blockNumber={lastBlockNumber - 1} />
            <Block
              position={[1 + gap, 0, 0]}
              blockNumber={lastBlockNumber - 2}
            />
          </group>
        )}
        {/* <Html>
          <div className="App">
            Block Number: {blockNumber}
          </div>
        </Html> */}
        <OrbitControls rotation={[-0.5, 0, 0]} />
        <Stats />
      </Canvas>
    </div>
  );
}

export default App;
