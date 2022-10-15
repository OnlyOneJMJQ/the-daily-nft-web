import React, { useRef } from "react";
import { usePrepareContractWrite, useContractWrite, useAccount } from "wagmi";
import auctionArtifact from "../contracts/Auction.json";
import * as ethers from "ethers";

function SubmitBid() {
  const inputRef = useRef(null);

  const { address, isConnected } = useAccount();

  const { config } = usePrepareContractWrite({
    address: "0xA28FE07AB96B5B6bBC2C789dff7e839cC69ae7a4",
    abi: auctionArtifact.abi,
    functionName: "bid",
    overrides: {
      value: ethers.utils.parseEther("105"),
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <form>
      <label className="block w-full mt-3" htmlFor="bid">
        Bid (ETH)
      </label>
      <input
        className="block w-full border-2 border-black p-2 rounded-md"
        name="bid"
        type="text"
        ref={inputRef}
        default="0"
      ></input>
      <label className="block w-full mt-3" htmlFor="bid">
        Blurb: 500 characters about why this NFT is special.
      </label>
      <textarea
        className="block w-full border-2 border-black p-2 rounded-md"
        name="blurb"
        rows="3"
      ></textarea>
      <button
        className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50 rounded-md border-2 border-black block w-full mt-3"
        type="button"
        onClick={() => write?.()}
      >
        Place Bid
      </button>
    </form>
  );
}

export default SubmitBid;
