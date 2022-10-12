import "../App.css";

function Nav() {
  return (
    <div className="text-center mt-3 mb-5">
      <nav className="flex-1">
        <a
          className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50 rounded-l-md"
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
          className="bg-slate-100 font-bold px-4 py-2 hover:bg-slate-50 rounded-r-md"
          href={`/about`}
        >
          ?
        </a>
      </nav>
    </div>
  );
}

export default Nav;
