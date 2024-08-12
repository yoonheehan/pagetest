import { Link } from "react-router-dom";

function Router() {
  return (
    <div>
      <nav className="nav">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/project" className="link">
          Projects
        </Link>
      </nav>
    </div>
  );
}

export default Router;
