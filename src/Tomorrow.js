import "./App.css";
import Nav from "./components/Nav";
import Countdown from "react-countdown";
import Heading from "./components/Heading";
import { useAccount } from "wagmi";
import HighestBid from "./components/HighestBid";
import SubmitBid from "./components/SubmitBid";

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
        <SubmitBid />
      </div>
    </div>
  );
}

export default Tomorrow;
