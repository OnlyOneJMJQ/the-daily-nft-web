import React, { useRef, useState } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
} from "wagmi";
import auctionArtifact from "../contracts/Auction.json";
import * as ethers from "ethers";
import NFTList from "./NFTList";

function SubmitBid() {
  const [NFTData, setNFTData] = useState({});

  const auctionAddress = process.env.REACT_APP_AUCTION_ADDRESS;

  const highestBid = useContractRead({
    address: auctionAddress,
    abi: auctionArtifact.abi,
    functionName: "highestBid",
  });

  const inputRef = useRef();
  const [error, setError] = useState(null);

  let bid = inputRef.current?.value || "1";

  const { config } = usePrepareContractWrite({
    address: auctionAddress,
    abi: auctionArtifact.abi,
    functionName: "bid",
    enabled: false,
    onError(error) {
      console.log(error);
      setError(error);
    },
    overrides: {
      value: ethers.utils.parseUnits(bid, "wei"),
    },
  });

  const { isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      <NFTList setNFTData={setNFTData} />
      <form>
        <label className="block w-full mt-3" htmlFor="bid">
          Bid (Wei)
        </label>
        {highestBid.data && (
          <input
            className="block w-full border-2 border-black p-2 rounded-md"
            name="bid"
            type="number"
            ref={inputRef}
            defaultValue={highestBid.data.toNumber() + 1}
          ></input>
        )}
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
          disabled={!write || isLoading}
        >
          {isLoading ? "Bidding..." : "Place Bid"}
        </button>
      </form>

      {isSuccess && !error && (
        <div className="toast border-l-2 border-green-600">
          <p>Bid placed successfully!</p>
        </div>
      )}

      {error && (
        <div className="toast border-l-4 border-red-600">
          <p>
            <span className="text-bold">
              Error {error.code}: {error.message}
            </span>
            :<br />
            {error.data?.message}
          </p>
        </div>
      )}
    </>
  );
}

export default SubmitBid;
