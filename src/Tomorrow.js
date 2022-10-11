import "./App.css";

function Tomorrow() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold underline">
        The Daily NFT
      </h1>
      <nav className="flex-1">
        <a
          className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50"
          href={`/`}
        >
          ☀️ Today
        </a>
        <a
          className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50"
          href={`/tomorrow`}
        >
          🔨 Tomorrow
        </a>
        <a
          className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50"
          href={`/about`}
        >
          ?
        </a>
      </nav>
      <h2>TOMORROW</h2>
    </div>
  );
}

export default Tomorrow;
