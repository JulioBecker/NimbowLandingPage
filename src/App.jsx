import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Stats from './components/Stats';
import About from './components/About';
import ProductSection from './components/ProductSection';
import FooterCTA from './components/FooterCTA';
import WhatsAppButton from './components/WhatsAppButton';
import { LayoutDashboard, Smartphone, Wifi } from 'lucide-react';

function App() {
  const products = [
    {
      id: "tickets",
      reverse: false,
      title: "TICKETS",
      logo: "img/NIMBOW TICKETS - FUNDO ESCURO.png",
      subtitle: "A EXPERIÊNCIA COMEÇA NA ENTRADA",
      description: "Venda ingressos, valide acessos e acompanhe a performance do seu evento em tempo real com uma operação rápida, segura e integrada",
      features: [
        "Check-in ágil e seguro",
        "Controle de acessos em tempo real",
        "Gestão inteligente de ingressos",
        "Operação online e offline",
        "Bilheteria física e digital unificadas",
        "Menos fila e mais agilidade"
      ],
      bgColor: 'rgba(139, 92, 246, 0.05)',
      themeColor: '#8B5CF6',
      icon: <Smartphone size={64} color="#8B5CF6" strokeWidth={1.5} />,
      image: "img/tickets.jpeg",
      bgImage: "img/templatetickets.png"
    },
    {
      id: "gestao",
      reverse: true,
      title: "GESTÃO A&B",
      logo: "img/NIMBOW GESTAO - FUNDO ESCURO.png",
      subtitle: "MAIS CONTROLE. MAIS PERFORMANCE EM TEMPO REAL",
      description: "Gestão operacional completa para eventos que exigem velocidade, controle financeiro e monitoramento em tempo real",
      features: [
        "Controle financeiro total e real",
        "Gestão integrada de estoque e PDV",
        "Operação rápida and estável",
        "Dashboards personalizados",
        "Acompanhamento de vendas em tempo real",
        "Fechamento de caixa na hora"
      ],
      bgColor: 'rgba(155, 234, 0, 0.05)',
      themeColor: '#9BEA00',
      icon: <LayoutDashboard size={64} color="#9BEA00" strokeWidth={1.5} />,
      image: "img/gestao.jpeg",
      bgImage: "img/templategestao.png"
    },
    {
      id: "ultraconect",
      reverse: false,
      title: "ULTRA.CONECT",
      logo: "img/NIMBOW ULTRA.CONECT - FUNDO ESCURO.png",
      subtitle: "SUA OPERAÇÃO CONECTADA SEM INTERRUPÇÕES",
      description: "O Ultra.Conect entrega conectividade dedicada para bilheteria, PDV's, ativações e operation técnica, garantindo mais estabilidade e performance durante todo o evento",
      features: [
        "Internet dedicada para operação",
        "Cobertura personalizada do evento",
        "Estabilidade para PDV's e bilheteria",
        "Suporte técnico especializado",
        "Conectividade para grandes públicos",
        "Operação online sem interrupções"
      ],
      bgColor: 'rgba(0, 51, 204, 0.05)',
      themeColor: '#0033CC',
      icon: <Wifi size={64} color="#0033CC" strokeWidth={1.5} />,
      image: "img/wifi.jpeg",
      bgImage: "img/templateultra.png"
    }
  ];

  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Stats />
      <About />
      
      {products.map((prod, idx) => (
        <ProductSection 
          key={idx}
          id={prod.id}
          reverse={prod.reverse}
          title={prod.title}
          logo={prod.logo}
          subtitle={prod.subtitle}
          description={prod.description}
          features={prod.features}
          icon={prod.icon}
          image={prod.image}
          bgColor={prod.bgColor}
          themeColor={prod.themeColor}
          bgImage={prod.bgImage}
        />
      ))}

      <FooterCTA />
      <WhatsAppButton />
    </>
  );
}

export default App;
