import React from "react";
import { Canvas } from "@react-three/fiber";
import Block from "./components/block";
import { Html, OrbitControls, Stats } from "@react-three/drei";

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
  const { lastBlockNumber } = useBlock(0);

  // const lastBlockNumber = 17264939;

  const gap = 0.1;

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
        <OrbitControls
          target={[0, 1.5, 0]}
          enableDamping={false}
          rotateSpeed={0.1}
          zoomSpeed={0.1}
          panSpeed={0.1}
          keyPanSpeed={0.1}
          autoRotateSpeed={0.1}
          maxDistance={7}
          minDistance={4.5}
        />
        <Html
          position={[0, 8, -1]}
          style={{
            width: 600,
            textAlign: "center",
            left: -300,
            color: "lightgreen",
          }}
        >
          <h1>Block explorer</h1>
          <p>
            Proof of concept. Blockchain in 3D. This was part of week 3 of the
            Ethereum course at Alchemy University.
          </p>
          <p>
            It displays the last three blocks of Ethereum network and its
            transactions
          </p>
          <a href="https://github.com/sebastianoscarlopez/blockexplorer">
            <strong
              style={{
                color: "white",
                fontStyle: "italic",
                borderBottom: "1px solid white",
              }}
            >
              https://github.com/sebastianoscarlopez/blockexplorer
            </strong>
          </a>
        </Html>
      </Canvas>
    </div>
  );
}

export default App;
