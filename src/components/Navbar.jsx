import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar"> 
      <a href="/" className={ location.pathname === "/" ? "active" : ""}> Home </a>
      <a href="./project" className={ location.pathname === "/project" ? "active" : ""}> Projects </a>
      <button className="back-btn" onClick={() => navigate(-1)} > Back </button>
    </nav>
  );
}

export default Navbar;