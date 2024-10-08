import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <section id="home" className="p-8 mt-16">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-lg">I create dynamic and responsive web applications.</p>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
