import React from 'react';
import { ArrowRight } from 'lucide-react';

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
            PRONTO PARA LEVAR SUA EXPERIÊNCIA <br />
            PARA O <span style={{ color: 'var(--nimbow-green)' }}>PRÓXIMO NÍVEL?</span>
          </h2>
        </div>

        <div className="footer-cta-col" style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '24px',
            lineHeight: '1.6'
          }}>
            Fale com um especialista e descubra como a NIMBOW pode transformar seu evento em um grande sucesso.
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
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        color: 'rgba(255,255,255,0.5)',
      }}>
        <img
          src="img/logos.png"
          alt="Nimbow"
          style={{ height: '30px', filter: 'grayscale(1) invert(1) brightness(2)' }}
        />
        <p>© {new Date().getFullYear()} Nimbow. Todos os direitos reservados.</p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
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
