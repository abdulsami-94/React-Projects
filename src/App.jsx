import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from "./pages/Project";
import ProjectPage from './pages/ProjectPage';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext.jsx';
import { useContext } from 'react';
import Sidebar from './components/Sidebar.jsx';

function App() {
    const { theme } = useContext(ThemeContext);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
    <div className={`${theme} min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300`}>
      <Sidebar />
        <main className="flex-1 md:ml-64 p-8">  
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