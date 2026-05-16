import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', hoverColor: 'var(--nimbow-green)' },
    { name: 'NIMBOW TICKETS', href: '#tickets', hoverColor: '#8B5CF6' },
    { name: 'NIMBOW GESTÃO A&B', href: '#gestao', hoverColor: '#9BEA00' },
    { name: 'NIMBOW ULTRACONECT', href: '#ultraconect', hoverColor: '#0033CC' },
    { name: 'SOBRE A NIMBOW', href: '#sobre', hoverColor: 'var(--nimbow-green)' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      padding: isScrolled ? '12px 0' : '20px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            src="img/logos.png"
            alt="Nimbow Logo"
            style={{ height: '40px', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '13px',
                fontWeight: '600',
                color: 'var(--text-main)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = link.hoverColor}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta">
          <a 
            href="https://wa.me/5541988917885?text=Olá! Gostaria de saber mais sobre as soluções da Nimbow." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline" 
            style={{
              fontSize: '12px',
              padding: '10px 20px',
              borderRadius: '50px',
            }}
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none', color: 'var(--text-main)' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-main)',
          padding: '20px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderTop: '1px solid var(--border-color)',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-main)',
                padding: '8px 0',
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5541988917885?text=Olá! Gostaria de saber mais sobre as soluções da Nimbow." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary" 
            onClick={() => setMobileMenuOpen(false)}
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
