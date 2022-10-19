import React from "react";
import auctionArtifact from "../contracts/Auction.json";
import { useContractRead } from "wagmi";

function HighestBid() {
  const currentBid = useContractRead({
    address: "0xD08b8398F0A3a0d63A921329Fb38F7209aFbCbD1",
    abi: auctionArtifact.abi,
    functionName: "highestBid",
    isDataEqual: (prev, next) => prev === next,
  });

  return <span className="text-bold">{currentBid.data?.toString()} Wei</span>;
}

export default HighestBid;
