import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/" replace>
        Home
      </Link>
      <Link to="/about" replace>
        About
      </Link>
    </div>
  );
}

export default Navigation;
