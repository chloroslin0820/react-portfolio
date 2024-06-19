import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';


function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
      
    </>
  )
}

export default App;
