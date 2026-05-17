import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, prefix = "", suffix = "", duration = 5000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing out quadratic: more uniform and visible count over a slow duration
      const easeOutQuad = progress * (2 - progress);
      setCount(Math.floor(easeOutQuad * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef} style={{ 
      display: 'inline-block', 
      opacity: 0,
      animation: isVisible ? 'boomEntrance 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' : 'none'
    }}>
      {prefix}{count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section style={{
      padding: '100px 0',
      backgroundColor: 'var(--bg-dark)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(155, 234, 0, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          textAlign: 'center'
        }} className="stats-grid">
          
          <div className="stat-item">
            <h3 style={{ fontSize: '56px', color: 'var(--nimbow-green)', marginBottom: '8px', fontWeight: '900', letterSpacing: '-2px' }}>
              <CountUp end={500} prefix="+" duration={4500} />
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
              Eventos Operados
            </p>
          </div>

          <div className="stat-item">
            <h3 style={{ fontSize: '56px', color: '#8B5CF6', marginBottom: '8px', fontWeight: '900', letterSpacing: '-2px' }}>
              <CountUp end={15} prefix="R$" suffix="M" duration={5000} />
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
              Processados em Vendas
            </p>
          </div>

          <div className="stat-item">
            <h3 style={{ fontSize: '56px', color: '#0033CC', marginBottom: '8px', fontWeight: '900', letterSpacing: '-2px' }}>
              <CountUp end={500} prefix="+" duration={4500} />
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
              PDV's em uma única operação
            </p>
          </div>

          <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '40px', color: '#ffffff', marginBottom: '8px', fontWeight: '900', letterSpacing: '-1px' }}>
              <span style={{ 
                display: 'inline-block', 
                animation: 'boomEntrance 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, pulse 2s infinite 1.2s' 
              }}>
                24/7
              </span>
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
              Suporte em Tempo Real
            </p>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes boomEntrance {
          0% {
            transform: scale(0.2);
            opacity: 0;
            filter: brightness(4) drop-shadow(0 0 30px currentColor);
          }
          60% {
            transform: scale(1.3);
            filter: brightness(2) drop-shadow(0 0 15px currentColor);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1) drop-shadow(0 0 0px transparent);
          }
        }
        @keyframes pulse {
          0% { opacity: 0.8; transform: scale(0.95); text-shadow: 0 0 0 rgba(255,255,255,0); }
          50% { opacity: 1; transform: scale(1.05); text-shadow: 0 0 20px rgba(255,255,255,0.5); }
          100% { opacity: 0.8; transform: scale(0.95); text-shadow: 0 0 0 rgba(255,255,255,0); }
        }
        @media (max-width: 991px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px 20px !important;
          }
          .stat-item h3 {
            font-size: 40px !important;
          }
        }
        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default Stats;
