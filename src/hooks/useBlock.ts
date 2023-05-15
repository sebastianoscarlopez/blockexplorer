import { Alchemy, BlockWithTransactions, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

const useBlock = (blockNumber?: number) => {
  const [lastBlockNumber, setLastBlockNumber] = useState<number>();
  const [blockData, setBlockData] = useState<BlockWithTransactions>();

  useEffect(() => {
    if (lastBlockNumber === undefined) {
      alchemy.core.getBlockNumber()
        .then(setLastBlockNumber)
    }
  });

  useEffect(() => {

    if (blockNumber !== undefined) {
      alchemy.core.getBlockWithTransactions(blockNumber)
        .then(setBlockData)
    }
  }, [blockNumber]);

  return { lastBlockNumber, blockData }
}

export default useBlock