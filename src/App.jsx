import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from "./pages/Project";
import ProjectPage from './pages/ProjectPage';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext.jsx';
import { useContext, useState , useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';

function App() {
    const { theme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);
    
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
    <div className=" min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {isOpen && (<div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-30 md:hidden" />)}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="flex-1 md:ml-64 p-8">  
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">{isOpen ? 'x' : '☰'}
          </button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/project/:id" element={<Project />} />
            </Routes>
        </main>
    </div>
    </Router>
  );
}

export default App;