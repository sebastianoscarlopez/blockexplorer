import { Alchemy, Network } from 'alchemy-sdk';
import React, { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import Block from "./components/block";
import { Html, Stats } from "@react-three/drei";

import './App.css';

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
  const [blockNumber, setBlockNumber] = useState < number > ();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  return (
    <Canvas>
      <ambientLight color={"red"} />
      <pointLight color={"green"} position={[10, 10, 10]} />
      <Block position={[-1.2, 1, 0]} />
      <Block position={[1.2, 0, 0]} />
      <Html>
        <div className="App">
          Block Number: {blockNumber}
          {/* <CanvasContainer /> */}
        </div>
      </Html>
    </Canvas>
  );
}

export default App;
