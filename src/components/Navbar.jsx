import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors"> 
      <a href="/" className={`mr-4 ${location.pathname === "/" ? "font-bold border-b-2 border-black dark:border-white" : "text-gray-600 dark:text-gray-400"}`}> Home </a>
      <a href="./project" className={`mr-4 ${location.pathname === "/project" ? "font-bold border-b-2 border-black dark:border-white" : "text-gray-600 dark:text-gray-400"}`}> Projects </a>
      <button className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md hover:opacity-80 transition-all text-black dark:text-white" onClick={toggleTheme}> {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    </nav>
  );
}

export default Navbar;