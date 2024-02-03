import './Styles/General.css';
import Navbar from './components/navbar';
import ProjectSection from './components/ProjectSection';
import CertificateSection from './components/CertificateSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProjectSection/>
      <CertificateSection/>
    </div>
  );
}

export default App;
