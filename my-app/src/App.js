import './Styles/General.css';
import Navbar from './components/navbar';
import ProjectSection from './components/ProjectSection';
import CertificateSection from './components/CertificateSection';
import AcademicSection from './components/AcademicSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProjectSection/>
      <CertificateSection/>
      <AcademicSection/>
      <Footer/>
    </div>
  );
}

export default App;
