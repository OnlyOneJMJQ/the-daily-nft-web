import "./App.css";
import Nav from "./components/Nav";

function Today() {
  return (
    <div className="container max-w-xl py-5">
      <h1 className="text-center font-bold underline">The Daily NFT</h1>
      <Nav />
      <h2>TODAY</h2>
    </div>
  );
}

export default Today;
