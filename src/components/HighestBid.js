import React from "react";
import auctionArtifact from "../contracts/Auction.json";
import { useContractRead } from "wagmi";
import { useEffect, useState } from "react";

function HighestBid() {
  const currentBid = useContractRead({
    address: "0xA28FE07AB96B5B6bBC2C789dff7e839cC69ae7a4",
    abi: auctionArtifact.abi,
    functionName: "highestBid",
    isDataEqual: (prev, next) => prev === next,
  });

  return <span className="text-bold">{currentBid.data?.toString()} Wei</span>;
}

export default HighestBid;
