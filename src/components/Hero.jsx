import React, { useState } from 'react';
import { Settings, TrendingUp, Wifi, Sparkles, ArrowRight, Lock, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    event: '',
    solution: []
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ["Gestão A&B", "Tickets", "Ultraconect", "Todas as soluções"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, whatsapp, event, solution } = formData;
    const solutionsText = solution.length > 0 ? solution.join(', ') : 'Não informada';
    const message = `Olá! Tenho interesse nas soluções da Nimbow.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*WhatsApp:* ${whatsapp}\n*Evento:* ${event}\n*Solução de interesse:* ${solutionsText}`;
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
        alignItems: 'start',
      }}>
        {/* Left Column */}
        <div style={{ paddingRight: '20px' }}>
          <h1 style={{
            fontSize: '48px',
            lineHeight: '1.15',
            marginBottom: '16px',
            color: 'var(--text-main)',
            letterSpacing: '-1.5px',
            fontWeight: '900'
          }}>
            DO INGRESSO AO <br />FECHAMENTO DE CAIXA
          </h1>
          
          <h2 style={{
            fontSize: '22px',
            lineHeight: '1.3',
            marginBottom: '32px',
            color: 'var(--text-main)',
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }} className="hero-subtitle">
            A <span style={{ color: 'var(--nimbow-green)' }}>PLATAFORMA COMPLETA</span> <br />
            PARA A OPERAÇÃO DO SEU EVENTO
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            maxWidth: '500px',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            MAIS CONTROLE. MENOS FILA. MAIS VENDA.<br/>
            Soluções integradas para eventos que precisam operar com eficiência do início ao fim.
          </p>

          <div className="features-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px 24px',
            marginBottom: '48px',
          }}>
            <FeatureItem icon={<Settings size={24} color="var(--nimbow-green)" />} text="GESTÃO CENTRALIZADA DO EVENTO" />
            <FeatureItem icon={<TrendingUp size={24} color="var(--nimbow-green)" />} text="DADOS E VENDAS EM TEMPO REAL" />
            <FeatureItem icon={<Wifi size={24} color="var(--nimbow-green)" />} text="ESTABILIDADE PARA VENDER SEM PARAR" />
            <FeatureItem icon={<Sparkles size={24} color="var(--nimbow-green)" />} text="TECNOLOGIA PREPARADA PARA ALTA DEMANDA" />
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
            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-main)', textTransform: 'uppercase' }}>
              TRANSFORME A OPERAÇÃO DO SEU EVENTO!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Fale com nosso time e descubra uma plataforma criada para reduzir falhas, acelerar operações e elevar a experiência do público.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nome completo" required className="form-input" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="E-mail profissional" required className="form-input" />
            <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="WhatsApp" required className="form-input" />
            <input type="text" name="event" value={formData.event} onChange={handleInputChange} placeholder="Nome do evento" required className="form-input" />
            
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
                    color: formData.solution.length > 0 ? 'var(--text-main)' : 'var(--text-light)',
                    fontSize: '15px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {formData.solution.length > 0 ? formData.solution.join(', ') : "Qual solução você tem interesse?"}
                  </span>
                  <ChevronDown size={16} style={{ flexShrink: 0, transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
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
                    {options.map((opt) => {
                      const isSelected = formData.solution.includes(opt);
                      return (
                        <div 
                          key={opt}
                          style={{
                            padding: '12px 16px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            transition: 'background-color 0.2s',
                            color: 'var(--text-main)',
                            backgroundColor: isSelected ? 'rgba(155, 234, 0, 0.05)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(155, 234, 0, 0.05)';
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                          onClick={() => {
                            let current = [...formData.solution];
                            if (current.includes(opt)) {
                              current = current.filter(item => item !== opt);
                            } else {
                              if (current.length < 2) {
                                current.push(opt);
                              } else {
                                // If 2 are already selected, replace the last one
                                current[1] = opt;
                              }
                            }
                            setFormData({ ...formData, solution: current });
                            
                            // Close dropdown if 2 items are selected or if "Todas as soluções" is selected
                            if (current.length === 2 || opt === "Todas as soluções") {
                              setIsDropdownOpen(false);
                            }
                          }}
                        >
                          <input 
                            type="checkbox"
                            checked={isSelected}
                            readOnly
                            style={{
                              accentColor: 'var(--nimbow-green)',
                              cursor: 'pointer',
                              width: '16px',
                              height: '16px',
                              margin: 0
                            }}
                          />
                          <span style={{ fontWeight: isSelected ? '600' : '400' }}>
                            {opt}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', padding: '16px', width: '100%' }}>
              SOLICITAR PROPOSTA <ArrowRight size={20} />
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
          height: 52px;
          padding: 0 16px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 15px;
          color: var(--text-main);
          background-color: var(--bg-main);
          transition: border-color 0.3s;
          font-family: inherit;
          box-sizing: border-box;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--nimbow-green);
          box-shadow: 0 0 0 3px rgba(155, 234, 0, 0.1);
        }
        @media (max-width: 991px) {
          #home {
            padding: 100px 0 40px !important;
          }
          #home .container {
            grid-template-columns: 1fr !important;
            padding-top: 20px;
            text-align: center;
          }
          #home .container > div:first-child {
            padding-right: 0 !important;
          }
          #home h1 {
            font-size: 34px !important;
            line-height: 1.2 !important;
            margin-bottom: 16px !important;
          }
          .hero-subtitle {
            font-size: 19px !important;
            line-height: 1.3 !important;
            margin-bottom: 28px !important;
          }
          #home p {
            margin: 0 auto 32px !important;
            font-size: 15px !important;
          }
          #home .btn {
            display: flex;
            margin: 0 auto;
            width: fit-content;
          }
          #home .features-grid {
             grid-template-columns: 1fr 1fr !important;
             gap: 24px 16px !important;
             justify-content: center !important;
          }
          #contato {
            padding: 24px !important;
            margin: 40px auto 0 !important;
            width: 100% !important;
            max-width: 480px !important;
            box-sizing: border-box !important;
          }
        }
        @media (max-width: 576px) {
          #home h1 {
            font-size: 26px !important;
            line-height: 1.25 !important;
            margin-bottom: 12px !important;
          }
          .hero-subtitle {
            font-size: 16px !important;
            line-height: 1.35 !important;
            margin-bottom: 24px !important;
          }
          #home .features-grid {
             display: grid !important;
             grid-template-columns: 1fr !important;
             width: 100% !important;
             margin: 0 auto 40px !important;
             gap: 20px !important;
          }
          .feature-item {
             flex-direction: column !important;
             align-items: center !important;
             text-align: center !important;
          }
        }
      `}} />
    </section>
  );
};

const FeatureItem = ({ icon, text }) => (
  <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left', width: '100%' }}>
    <div style={{
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      backgroundColor: 'rgba(155, 234, 0, 0.1)',
      display: 'flex',
      flex: '0 0 48px',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {icon}
    </div>
    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px', color: 'var(--text-main)', lineHeight: '1.4' }}>
      {text}
    </span>
  </div>
);

export default Hero;
