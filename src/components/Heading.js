import "../App.css";

function Heading() {
  return (
    <div className="flex mb-5">
      <h1 className="text-center font-bold inline-block">The Daily NFT</h1>
      <button
        className="ml-auto bg-green-100 font-bold px-4 py-2 hover:bg-green-50 rounded-md border-2 border-black"
        type="button"
      >
        Login
      </button>
    </div>
  );
}

export default Heading;
