import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative" style={{backgroundImage: "url(/assets/back.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}>
      <div className="absolute inset-0 bg-black bg-opacity-80 z-10" />

{/* Foreground Content */}
<div className="relative z-20">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      {/* <WorkExperience /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
    </main>
  );
};

export default App;
