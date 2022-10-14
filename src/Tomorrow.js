import "./App.css";
import Nav from "./components/Nav";
import Countdown from "react-countdown";
import Heading from "./components/Heading";
import { useAccount } from "wagmi";
import HighestBid from "./components/HighestBid";

function Tomorrow() {
  const { address, isConnected } = useAccount();

  function timeUntilTomorrow() {
    let now = new Date();
    let tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    let tut = tomorrow - now;
    return Date.now() + tut;
  }

  const countdownRenderer = ({ hours, minutes, seconds }) => {
    return (
      <span className="underline">
        {hours} hours {minutes} minutes and {seconds} seconds
      </span>
    );
  };

  return (
    <div className="container max-w-xl py-5">
      <Heading />
      <Nav />
      <h2>
        Only{" "}
        <Countdown date={timeUntilTomorrow()} renderer={countdownRenderer} />{" "}
        longer to bid on tomorrow's slot!
      </h2>
      <p className="mt-5">
        Highest Bid: <HighestBid />
      </p>
      <div className={isConnected ? "" : "blur-lg pointer-events-none"}>
        <form>
          <label className="block w-full mt-3" htmlFor="bid">
            Bid (ETH)
          </label>
          <input
            className="block w-full border-2 border-black p-2 rounded-md"
            name="bid"
            type="number"
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
          >
            Place Bid
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tomorrow;
