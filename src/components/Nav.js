import "../App.css";

function Nav() {
  return (
    <div className="text-center mb-5">
      <nav className="flex-1">
        <a
          className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50 rounded-l-md border-y-2 border-black border-l-2 border-r"
          href={`/`}
        >
          ☀️ Today
        </a>
        <a
          className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50 border-y-2 border-black"
          href={`/tomorrow`}
        >
          🔨 Tomorrow
        </a>
        <a
          className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50 rounded-r-md border-y-2 border-black border-r-2 border-l"
          href={`/about`}
        >
          ?
        </a>
      </nav>
    </div>
  );
}

export default Nav;
