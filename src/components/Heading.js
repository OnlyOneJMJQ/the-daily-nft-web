import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import "../App.css";

function Heading() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="flex mb-5">
      <h1 className="text-center font-bold inline-block">The Daily NFT</h1>
      {isConnected ? (
        <>
          <span className="block ml-auto address">{address}</span>
          <button
            className="ml-3 bg-red-100 font-bold px-3 hover:bg-red-50 rounded-md border-2 border-black"
            type="button"
            onClick={() => disconnect()}
          >
            ❌
          </button>
        </>
      ) : (
        <button
          className="ml-auto bg-green-100 font-bold px-4 py-2 hover:bg-green-50 rounded-md border-2 border-black"
          type="button"
          onClick={() => connect()}
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default Heading;
