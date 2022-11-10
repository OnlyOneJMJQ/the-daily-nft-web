import React from "react";
import auctionArtifact from "../contracts/Auction.json";
import { useContractRead } from "wagmi";

function HighestBid() {
  const auctionAddress = process.env.REACT_APP_AUCTION_ADDRESS;

  const currentBid = useContractRead({
    address: auctionAddress,
    abi: auctionArtifact.abi,
    functionName: "highestBid",
  });

  return <span className="text-bold">{currentBid.data?.toString()} Wei</span>;
}

export default HighestBid;
