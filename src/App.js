import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/Abaut';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router basename='/reactlayihe'>
      <div>
        <nav style={styles.nav}>
          <ul style={styles.menu}>
            <li><Link style={styles.link} to="/">Haqqında</Link></li>
            <li><Link style={styles.link} to="/projects">İş Nümunələri</Link></li>
            <li><Link style={styles.link} to="/contact">Əlaqə Məlumatları</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  nav: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderBottom: '2px solid #ddd',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  }
};

export default App;
