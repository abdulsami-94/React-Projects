import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="navbar"> 
      <a href="/" className={ location.pathname === "/" ? "active" : ""}> Home </a>
      <a href="./project" className={ location.pathname === "/project" ? "active" : ""}> Projects </a>
      <button className="back-btn" onClick={() => navigate(-1)} > Back </button>
      <button onClick={toggleTheme}> {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    </nav>
  );
}

export default Navbar;