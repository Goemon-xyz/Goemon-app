import React from "react";
import { View } from "react-native";
import DogecoinSVG from "./dogecoinSVG";
import BitcoinSVG from "./bitcoinSVG";
import EthereumSVG from "./ethcoinSVG";

function Coin({ type }: { type: string }) {
  let CoinSVG;
  switch (type) {
    case "Bitcoin":
      CoinSVG = BitcoinSVG;
      break;
    case "Ethereum":
      CoinSVG = EthereumSVG;
      break;
    case "Dogecoin":
      CoinSVG = DogecoinSVG;
      break;
    default:
      CoinSVG = View; 
  }

  return <CoinSVG />;
}

export default Coin;
