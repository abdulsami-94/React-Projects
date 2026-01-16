import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';

function Portfolio(){
  return(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default Portfolio;