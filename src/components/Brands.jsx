import React from 'react';

const Brands = () => {
  // Array de marcas base, adicionando mais algumas para dar volume
  const baseBrands = [
    "DISNEY CELEBRA BRASIL",
    "K-1 BRAZIL",
    "CUPOLA SUMMIT",
  ];

  // Duplica o array para criar o efeito de loop infinito perfeito (marquee)
  const brands = [...baseBrands, ...baseBrands, ...baseBrands];

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg-main)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative',
      overflow: 'hidden' // Esconde o que sai da tela
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '56px'
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '700',
            color: 'var(--text-main)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textAlign: 'center'
          }}>
            Grandes eventos confiam na Nimbow
          </h3>
        </div>
      </div>

      {/* Marquee Wrapper - Área da animação */}
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'scrollBrands 40s linear infinite',
      }}>
        {brands.map((brand, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 32px',
            gap: '32px'
          }}>
            <span style={{
              fontSize: '36px',
              fontWeight: '900',
              color: 'var(--text-secondary)',
              letterSpacing: '-1.5px',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
              cursor: 'default',
              opacity: 0.5
            }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--nimbow-green)';
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.opacity = '0.5';
                e.target.style.transform = 'scale(1)';
              }}>
              {brand}
            </span>
            {/* Ponto separador verde */}
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'var(--nimbow-green)',
              opacity: 0.8,
              boxShadow: '0 0 10px var(--nimbow-green)'
            }} />
          </div>
        ))}
      </div>

      {/* Gradientes nas laterais para dar o efeito de sumiço suave (Fade edges) */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, bottom: 0,
        width: '15%',
        background: 'linear-gradient(to right, var(--bg-main) 0%, transparent 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0,
        width: '15%',
        background: 'linear-gradient(to left, var(--bg-main) 0%, transparent 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Keyframes da animação */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scrollBrands {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </section>
  );
};

export default Brands;
