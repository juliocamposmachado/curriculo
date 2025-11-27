import { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import CTAPopup from './components/CTAPopup';
import ctaImage from './cta_discord.png'; // Corrected path to src/cta_discord.jpg

function App() {
  const [showCTAPopup, setShowCTAPopup] = useState(false);

  const handleOpenCTAPopup = () => {
    setShowCTAPopup(true);
  };

  const handleCloseCTAPopup = () => {
    setShowCTAPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />

      {/* Button to open the CTA popup */}
      <button
        onClick={handleOpenCTAPopup}
        style={{
          position: 'fixed',
          bottom: '20px', // Adjusted position to be at the bottom
          right: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '50px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 999,
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Abrir Oferta Especial
      </button>

      {/* CTA Popup component */}
      <CTAPopup
        isOpen={showCTAPopup}
        onClose={handleCloseCTAPopup}
        ctaUrl="https://jcm-tecnologia.vercel.app"
        message="Junte-se à nossa comunidade no Discord para novidades e suporte!"
        cardBackgroundImage={ctaImage} // Pass the image as background
      />

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
