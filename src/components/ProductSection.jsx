import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ProductSection = ({ id, reverse, title, subtitle, description, features, icon, image, bgColor, themeColor, bgImage, logo }) => {
  return (
    <section id={id} style={{
      padding: '100px 0',
      backgroundColor: `color-mix(in srgb, ${themeColor} 20%, #050505)`,
      backgroundImage: bgImage ? `linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.7)), url(${bgImage})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Blurred colored orb for the 'blur' effect on dark background */}
      {themeColor && (
        <div className="orb" style={{
          position: 'absolute',
          top: '50%',
          left: reverse ? '20%' : '80%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: `radial-gradient(circle, color-mix(in srgb, ${themeColor} 50%, transparent) 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
      )}

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
        direction: reverse ? 'rtl' : 'ltr',
      }}>
        {/* Image/Mockup Area */}
        <div style={{
          direction: 'ltr',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '4/3',
            backgroundColor: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}>
             {/* Content Area */}
             {image ? (
               <>
                 <img 
                   src={image} 
                   alt={title} 
                   style={{ 
                     width: '100%', 
                     height: '100%', 
                     objectFit: 'cover',
                     transition: 'all 0.5s ease',
                   }} 
                 />
                 <div style={{
                   position: 'absolute',
                   top: 0, left: 0, right: 0, bottom: 0,
                   background: `linear-gradient(to top, color-mix(in srgb, ${themeColor} 40%, #050505) 0%, transparent 70%)`,
                   pointerEvents: 'none',
                   opacity: 0.6
                 }}></div>
               </>
             ) : (
               <div style={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 justifyContent: 'center',
                 width: '100%',
                 height: '100%'
               }}>
                 {icon}
                 <div style={{ marginTop: '24px', fontWeight: '600', color: '#ffffff', letterSpacing: '2px' }}>
                    {title}
                 </div>
               </div>
             )}
          </div>
        </div>

        {/* Text Content */}
        <div style={{ direction: 'ltr' }}>
          {logo ? (
            <img 
              src={logo} 
              alt={title} 
              style={{ 
                width: '100%',
                maxWidth: '350px',
                height: 'auto', 
                marginBottom: '24px', 
                display: 'block' 
              }} 
            />
          ) : (
            <>
              <h4 style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '14px',
                fontWeight: '700',
                marginBottom: '8px',
                letterSpacing: '3px',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                NIMBOW
              </h4>
              <h2 className="section-title" style={{ 
                color: themeColor || 'var(--nimbow-green)', 
                marginBottom: '16px',
                textShadow: `0 0 25px color-mix(in srgb, ${themeColor} 30%, transparent), 0 5px 15px rgba(0,0,0,0.3)`,
                letterSpacing: '-0.5px'
              }}>
                {title}
              </h2>
            </>
          )}
          <p style={{
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '1px',
            color: '#ffffff',
            marginBottom: '24px'
          }}>
            {subtitle}
          </p>
          {description && (
            <p style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              {description}
            </p>
          )}

          <div className="product-features-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '40px'
          }}>
            {features.map((feature, idx) => (
              <div key={idx} className="product-feature-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ flexShrink: 0, display: 'flex' }}>
                  <CheckCircle2 size={18} color={themeColor || "var(--nimbow-green)"} />
                </div>
                <span style={{ fontSize: '14px', color: '#ffffff' }}>{feature}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://wa.me/5541988917885?text=Olá! Gostaria de saber mais sobre as soluções da Nimbow." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn" 
            style={{
              backgroundColor: '#ffffff',
              color: themeColor || 'var(--nimbow-green)',
              boxShadow: `0 8px 30px color-mix(in srgb, ${themeColor} 40%, transparent)`,
              padding: '14px 28px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '800'
            }}
          >
            CONHECER SOLUÇÃO <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          #${id} .container {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            text-align: center;
          }
          #${id} .container > div:first-child {
            grid-row: 2;
          }
          #${id} .container > div:last-child {
            grid-row: 1;
          }
          #${id} .btn {
            margin: 0 auto;
            width: fit-content;
          }
          /* Make product features grid a single column on mobile and center aligned */
          #${id} .product-features-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            justify-items: center !important;
            width: fit-content !important;
            margin: 0 auto 40px !important;
          }
          #${id} .product-feature-item {
            justify-content: flex-start !important;
            text-align: left !important;
            width: 100% !important;
            max-width: 280px; /* Limit width to keep icon and text close */
          }
          /* Resize the background orb for mobile to prevent overflow */
          #${id} .orb {
            width: 300px !important;
            height: 300px !important;
            filter: blur(40px) !important;
          }
        }
      `}} />
    </section>
  );
};

export default ProductSection;
