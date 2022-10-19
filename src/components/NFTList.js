import React from "react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { SDK, Auth } from "@infura/sdk";

function NFTList() {
  const [NFTs, setNFTs] = useState([]);
  const [fetching, setFetching] = useState(true);
  const { address, isConnected } = useAccount();

  const infuraProjectId = process.env.REACT_APP_INFURA_PROJECT_ID;
  const infuraProjectSecret = process.env.REACT_APP_INFURA_PROJECT_SECRET;
  const walletPrivateKey = process.env.REACT_APP_WALLET_PRIVATE_KEY;

  async function fetchNFTs() {
    const auth = new Auth({
      projectId: infuraProjectId,
      secretId: infuraProjectSecret,
      privateKey: walletPrivateKey,
      chainId: 5,
    });

    const sdk = new SDK(auth);

    const res = await sdk.getNFTs({
      publicAddress: address,
      includeMetadata: true,
    });

    setNFTs(res.assets);
  }

  useEffect(() => {
    fetchNFTs().catch(console.error);

    setFetching(false);
  }, []);

  return (
    <>
      {NFTs && (
        <ul>
          {NFTs.map((NFT) => (
            <li>
              <div className="card">
                <img src={NFT.metadata.image} alt={NFT.metadata.name} />
                <h3>{NFT.metadata.name}</h3>
                <p>{NFT.metadata.description}</p>
                {NFT.attributes && (
                  <ul>
                    {NFT.attributes.map((attribute) => (
                      <li>
                        {attribute.traitType}: {attribute.value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {!NFTs && !fetching && (
        <p>
          No NFTs were found for this address. Are you on the correct account?
        </p>
      )}

      {fetching && <p>Fetching your NFTs...</p>}
    </>
  );
}

export default NFTList;
