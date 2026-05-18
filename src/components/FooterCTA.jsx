import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: '#fff',
      padding: '80px 0',
      borderTop: '5px solid var(--nimbow-green)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        <div className="footer-cta-col" style={{ maxWidth: '600px' }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            SEU EVENTO PRECISA DE UMA <br />
            OPERAÇÃO <span style={{ color: 'var(--nimbow-green)' }}>À ALTURA.</span>
          </h2>
        </div>

        <div className="footer-cta-col" style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '24px',
            lineHeight: '1.6'
          }}>
            Tudo o que seu evento precisa em uma única plataforma.<br></br>
            Fale com nosso time e descubra como a NIMBOW pode integrar vendas, operação e conectividade com mais estabilidade e controle em tempo real.
          </p>
          <a
            href="https://wa.me/5541988917885?text=Olá! Gostaria de saber mais sobre as soluções da Nimbow."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            FALAR COM ESPECIALISTA <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom" style={{
        marginTop: '80px',
        paddingTop: '24px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        fontSize: '14px',
        color: 'rgba(255,255,255,0.5)',
      }}>
        {/* 1. Primeiro os botões */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://www.instagram.com/nimbowoficial/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a href="mailto:contato@nimbow.com.br" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
            <Mail size={24} />
          </a>
        </div>

        {/* 2. Depois os direitos reservados */}
        <p style={{ textAlign: 'center', margin: 0 }}>© {new Date().getFullYear()} Nimbow. Todos os direitos reservados.</p>

        {/* 3. E a logo da Nimbow por último */}
        <img
          src="img/NIMBOW PRINCIPAL - FUNDO ESCURO.png"
          alt="Nimbow"
          style={{ height: '40px', objectFit: 'contain' }}
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 991px) {
          footer .container {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
          footer h2 {
            font-size: 24px !important;
          }
          .footer-cta-col {
            align-items: center !important;
            text-align: center !important;
            min-width: 0 !important;
            width: 100% !important;
          }
          .footer-bottom {
            margin-top: 40px !important;
            gap: 20px;
          }
        }
      `}} />
    </footer>
  );
};

export default FooterCTA;
