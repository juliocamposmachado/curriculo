import React from 'react';

interface CTAPopupProps {
  isOpen: boolean;
  onClose: () => void;
  ctaUrl: string;
  message: string;
  cardBackgroundImage?: string; // Still useful for passing the image src
}

const CTAPopup: React.FC<CTAPopupProps> = ({ isOpen, onClose, ctaUrl, message, cardBackgroundImage }) => {
  if (!isOpen) return null;

  const handleButtonClick = () => {
    window.open(ctaUrl, '_blank');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        id="hs-overlay-cta-200201822899"
        role="dialog"
        style={{
          position: 'relative',
          width: 'min(90vw, 400px)',
          // height: 'min(90vh, 250px)', // Let height be determined by content
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
          transform: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Align items to the start of the column
          alignItems: 'center',
          padding: '20px',
          textAlign: 'center',
          // Removed background image styles from here
          color: '#333', // Default text color
          gap: '15px', // Add gap between elements
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 1001,
            color: '#333',
          }}
        >
          &times;
        </button>
        {cardBackgroundImage && (
          <img
            src={cardBackgroundImage}
            alt="CTA Background"
            style={{
              width: '120px', // Adjust image size as needed
              height: '120px', // Adjust image size as needed
              borderRadius: '50%',
              objectFit: 'cover',
              marginTop: '10px', // Space from the top
              marginBottom: '10px',
            }}
          />
        )}
        <p style={{ fontSize: '1.1rem', color: '#333' }}>{message}</p>
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#7289DA',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            marginTop: 'auto', // Push button to the bottom if content is short
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#677bc4')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7289DA')}
        >
          Acessar Agora
        </button>
      </div>
    </div>
  );
};

export default CTAPopup;
