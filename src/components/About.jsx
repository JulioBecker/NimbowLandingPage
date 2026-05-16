import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" style={{
      padding: '100px 0',
      backgroundColor: 'var(--bg-secondary)',
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}>
        {/* Text Content */}
        <div>
          <h4 style={{
            color: 'var(--nimbow-green)',
            fontSize: '14px',
            letterSpacing: '1px',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            Sobre a Nimbow
          </h4>
          <h2 className="section-title" style={{ marginBottom: '24px', color: 'var(--text-main)' }}>
            TECNOLOGIA QUE TRANSFORMA A INDÚSTRIA DE EVENTOS
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            A NIMBOW é uma plataforma completa que oferece soluções integradas para gestão, vendas de ingressos e conectividade. Tudo o que você precisa para realizar eventos extraordinários, com mais eficiência, segurança e resultados.
          </p>
          <a href="#contato" className="btn btn-outline">
            SAIBA MAIS SOBRE A NIMBOW <ArrowRight size={20} />
          </a>
        </div>

        {/* Abstract/Image representation */}
        <div style={{
          position: 'relative',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '1000px'
        }}>
          {/* We create a nice CSS abstract graphic to replace the 3D green shapes */}
          <div style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            backgroundColor: 'var(--nimbow-green)',
            borderRadius: '24px',
            transform: 'rotateX(20deg) rotateY(-20deg) rotateZ(15deg)',
            boxShadow: '0 30px 60px rgba(155, 234, 0, 0.3)',
            opacity: 0.9,
          }}></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
              position: 'absolute',
              width: '300px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '24px',
              transform: 'rotateX(10deg) rotateY(15deg) rotateZ(-10deg) translateZ(50px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '1px solid var(--border-color)',
            }}
          >
            <source src="img/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          #sobre .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #sobre .btn {
            margin: 0 auto;
            width: fit-content;
          }
        }
      `}} />
    </section>
  );
};

export default About;
