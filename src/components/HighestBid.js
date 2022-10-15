import React from "react";
import auctionArtifact from "../contracts/Auction.json";
import { useContractRead } from "wagmi";
import { useEffect, useState } from "react";

function HighestBid() {
  const currentBid = useContractRead({
    address: "0xa28fe07ab96b5b6bbc2c789dff7e839cc69ae7a4",
    abi: auctionArtifact.abi,
    functionName: "highestBid",
    isDataEqual: (prev, next) => prev === next,
  });

  return <span className="text-bold">{currentBid.data.toString()} ETH</span>;
}

export default HighestBid;
