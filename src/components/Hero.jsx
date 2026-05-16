import React, { useState } from 'react';
import { Settings, TrendingUp, Wifi, Sparkles, ArrowRight, Lock, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    event: '',
    solution: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ["Gestão A&B", "Tickets", "Ultraconect", "Todas as soluções"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, whatsapp, event, solution } = formData;
    const message = `Olá! Tenho interesse nas soluções da Nimbow.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*WhatsApp:* ${whatsapp}\n*Evento:* ${event}\n*Solução de interesse:* ${solution}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5541988917885?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" style={{
      padding: '120px 0 60px',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.15, // Subtle, blurry effect
          filter: 'blur(8px)',
        }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-in-a-concert-14050-large.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to ensure contrast */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'var(--bg-main)',
        opacity: 0.85,
        zIndex: 0
      }}></div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}>
        {/* Left Column */}
        <div style={{ paddingRight: '20px' }}>
          <h1 style={{
            fontSize: '56px',
            lineHeight: '1.1',
            marginBottom: '24px',
            color: 'var(--text-main)',
            letterSpacing: '-1px',
          }}>
            NIMBOW <br />
            <span style={{ color: 'var(--nimbow-green)' }}>COMPLETA PARA</span> <br />
            O SEU EVENTO.
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '48px',
            maxWidth: '500px',
            lineHeight: '1.6',
          }}>
            Soluções integradas que conectam gestão, vendas e pessoas, garantindo mais controle, desempenho e experiências inesquecíveis.
          </p>

          <div className="features-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px 24px',
            marginBottom: '48px',
          }}>
            <FeatureItem icon={<Settings size={24} color="var(--nimbow-green)" />} text="GESTÃO COMPLETA" />
            <FeatureItem icon={<TrendingUp size={24} color="var(--nimbow-green)" />} text="VENDAS INTELIGENTES" />
            <FeatureItem icon={<Wifi size={24} color="var(--nimbow-green)" />} text="CONEXÃO EM TEMPO REAL" />
            <FeatureItem icon={<Sparkles size={24} color="var(--nimbow-green)" />} text="EXPERIÊNCIAS INESQUECÍVEIS" />
          </div>

          <a href="#gestao" className="btn btn-primary" style={{ padding: '16px 32px' }}>
            CONHEÇA NOSSAS SOLUÇÕES <ArrowRight size={20} />
          </a>
        </div>

        {/* Right Column - Form */}
        <div id="contato" style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
          border: '1px solid var(--border-color)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-main)' }}>
              QUER LEVAR A <span style={{ color: 'var(--nimbow-green)' }}>NIMBOW</span> <br /> PARA O SEU EVENTO?
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Preencha o formulário e fale com nosso time de especialistas.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nome completo" required className="form-input" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="E-mail profissional" required className="form-input" />
            <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="WhatsApp" required className="form-input" />
            <input type="text" name="event" value={formData.event} onChange={handleInputChange} placeholder="Nome do evento" required className="form-input" />
            
            {/* Custom Select Dropdown */}
            <div style={{ position: 'relative' }}>
              <div 
                className="form-input" 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  borderColor: isDropdownOpen ? 'var(--nimbow-green)' : 'var(--border-color)',
                  boxShadow: isDropdownOpen ? '0 0 0 3px rgba(155, 234, 0, 0.1)' : 'none',
                  color: formData.solution ? 'var(--text-main)' : '#757575'
                }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {formData.solution || "Qual solução você tem interesse?"}
                <ChevronDown size={16} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </div>
              
              {isDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  marginTop: '4px',
                  backgroundColor: '#fff',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.1)',
                  zIndex: 50,
                  overflow: 'hidden'
                }}>
                  {options.map((opt) => (
                    <div 
                      key={opt}
                      style={{
                        padding: '12px 16px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        transition: 'background-color 0.2s',
                        color: 'var(--text-main)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(155, 234, 0, 0.1)';
                        e.currentTarget.style.color = 'var(--nimbow-green)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--text-main)';
                      }}
                      onClick={() => {
                        setFormData({ ...formData, solution: opt });
                        setIsDropdownOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', padding: '16px', width: '100%' }}>
              QUERO UMA APRESENTAÇÃO <ArrowRight size={20} />
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', color: 'var(--text-light)', fontSize: '12px' }}>
              <Lock size={12} /> Seus dados estão seguros conosco.
            </div>
          </form>
        </div>
      </div>
      
      {/* Add some inline styles for this component that aren't global yet */}
      <style dangerouslySetInnerHTML={{__html: `
        .form-input {
          width: 100%;
          padding: 16px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 14px;
          color: var(--text-main);
          background-color: var(--bg-main);
          transition: border-color 0.3s;
          font-family: inherit;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--nimbow-green);
          box-shadow: 0 0 0 3px rgba(155, 234, 0, 0.1);
        }
        @media (max-width: 991px) {
          #home {
            padding: 80px 0 40px !important;
          }
          #home .container {
            grid-template-columns: 1fr !important;
            padding-top: 10px;
            text-align: center;
          }
          #home .container > div:first-child {
            padding-right: 0 !important;
          }
          #home h1 {
            font-size: 36px !important;
          }
          #home p {
            margin: 0 auto 32px !important;
          }
          #home .btn {
            display: flex;
            margin: 0 auto;
            width: fit-content;
          }
          #home .features-grid {
             justify-content: center !important;
          }
        }
      `}} />
    </section>
  );
};

const FeatureItem = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <div style={{
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      backgroundColor: 'rgba(155, 234, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {icon}
    </div>
    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px', color: 'var(--text-main)' }}>
      {text}
    </span>
  </div>
);

export default Hero;
