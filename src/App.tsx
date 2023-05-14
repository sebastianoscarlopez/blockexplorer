import { Alchemy, Network } from "alchemy-sdk";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Block from "./components/block";
import { OrbitControls, Stats } from "@react-three/drei";

import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState<number>(null!);

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  const sizeBlock = 1.0;
  const gap = 0.005;

  // Green block: #22A83F
  // Red block: #A82222
  // Blue block: #429FC8
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <Block
          scale={sizeBlock}
          position={[-sizeBlock - gap, 0, 0]}
          color="#A82222"
          blockNumber={blockNumber}
        />
        <Block
          scale={sizeBlock}
          position={[-sizeBlock - gap, sizeBlock + gap, 0]}
          color="#A82222"
          blockNumber={blockNumber}
        />
        <Block
          scale={sizeBlock}
          position={[0, 0, 0]}
          color="#429FC8"
          blockNumber={blockNumber - 1}
        />
        <Block
          scale={sizeBlock}
          position={[0, sizeBlock + gap, 0]}
          color="#429FC8"
          blockNumber={blockNumber - 1}
        />
        <Block
          scale={sizeBlock}
          position={[sizeBlock + gap, 0, 0]}
          color="#22A83F"
          blockNumber={blockNumber - 2}
        />
        <Block
          scale={sizeBlock}
          position={[sizeBlock + gap, sizeBlock + gap, 0]}
          color="#22A83F"
          blockNumber={blockNumber - 2}
        />
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
