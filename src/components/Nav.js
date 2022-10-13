import "../App.css";

function Nav() {
  return (
    <div className="text-center mb-5">
      <nav className="nav-pills">
        <a href={`/`}>☀️ Today</a>
        <a href={`/tomorrow`}>🔨 Tomorrow</a>
        <a href={`/about`}>?</a>
      </nav>
    </div>
  );
}

export default Nav;
