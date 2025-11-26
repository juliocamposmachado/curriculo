import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />

      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Julio Cesar Campos Machado. Desenvolvedor Full Stack • IA • Automação
          </p>
          <p className="text-gray-500 text-sm mt-2">
            São Paulo, Brasil
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
