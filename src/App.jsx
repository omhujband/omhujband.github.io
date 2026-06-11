import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import DocumentViewerPage from './pages/DocumentViewerPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/document" element={<DocumentViewerPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
