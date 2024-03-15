import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">App de tareas</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Registrar
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default header;
