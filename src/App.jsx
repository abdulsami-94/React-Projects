import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from "./pages/Project";
import ProjectPage from './pages/ProjectPage';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext.jsx';
import { useContext } from 'react';

function App() {
    const { theme } = useContext(ThemeContext);

  return (

    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff'}}>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;