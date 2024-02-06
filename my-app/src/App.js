import './Styles/General.css';
import Navbar from './components/navbar';
import ProjectSection from './components/ProjectSection';
import CertificateSection from './components/CertificateSection';
import AcademicSection from './components/AcademicSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProjectSection/>
      <CertificateSection/>
      <AcademicSection/>
    </div>
  );
}

export default App;
