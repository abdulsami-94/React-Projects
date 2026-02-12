import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Sidebar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <aside className="fixed left-0 top-0 h-full w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors hidden md:flex flex-col">
                <div className="p-4">
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Projects</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Home</Link>
                        </li>
                        <li>
                            <Link to="/project/counter" className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Counter App</Link>
                        </li>
                        <li>
                            <Link to="/project/Movie" className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Movie Search</Link>
                        </li>
                        <li>
                            <Link to="/project/Notes" className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Notes App</Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto p-4 border-t border-gray-100 dark:border-gray-800">
                    <button onClick={ toggleTheme } className="flex items-center w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="mr-3"> {theme === 'light' ? '🌙' : '☀️'}</span>
                        <span className="text-sm font-medium"> {theme === 'light' ? 'Dark' : 'Light'} Mode </span>
                    </button>
                    <button className="flex items-center w-full p-2 mt-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 trasnsition-colors">
                        <span className="mr-3"> ⚙️ </span>
                        <span className="text-sm font-medium"> Settings</span>
                    </button>
                </div>
            
        </aside>
    );
}

export default Sidebar;