import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
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
      subtitle: "VENDA MAIS. MELHOR. SEM COMPLICAÇÃO.",
      description: "Nosso sistema de venda de ingressos é rápido, seguro e flexível. Ideal para qualquer tipo de evento, do pequeno ao grandioso.",
      features: [
        "Venda online e offline",
        "Múltiplos tipos de ingresso",
        "Check-in ágil e seguro",
        "Taxas e lotes personalizados",
        "Integração com gestão A&B",
        "Relatórios de vendas"
      ],
      bgColor: 'rgba(139, 92, 246, 0.05)',
      themeColor: '#8B5CF6',
      icon: <Smartphone size={64} color="#8B5CF6" strokeWidth={1.5} />,
      image: "img/tickets.jpeg"
    },
    {
      id: "gestao",
      reverse: true,
      title: "GESTÃO A&B",
      subtitle: "GESTÃO INTELIGENTE. RESULTADOS REAIS.",
      description: "Tenha o controle total do seu evento na palma da mão. Da operação ao financeiro, nossa plataforma de gestão oferece visibilidade completa para decisões mais rápidas e assertivas.",
      features: [
        "Financeiro e comissões",
        "Controle de acesso",
        "Relatórios em tempo real",
        "Gestão de equipes",
        "Estoque e PDV",
        "Dashboards personalizados"
      ],
      bgColor: 'rgba(155, 234, 0, 0.05)',
      themeColor: '#9BEA00',
      icon: <LayoutDashboard size={64} color="#9BEA00" strokeWidth={1.5} />,
      image: "img/gestao.jpeg"
    },
    {
      id: "ultraconect",
      reverse: false,
      title: "ULTRACONECT",
      subtitle: "CONECTIVIDADE QUE ELEVA A EXPERIÊNCIA.",
      description: "Internet dedicada, estável e de alta performance para o seu evento. Com o UltraConect, você garante conexão para o público, equipes, operações e ativações – sem falhas.",
      features: [
        "Internet dedicada de alta velocidade",
        "Cobertura personalizada",
        "Monitoramento 24/7",
        "Suporte técnico especializado",
        "Mais estabilidade para vendas e ativações"
      ],
      bgColor: 'rgba(0, 51, 204, 0.05)',
      themeColor: '#0033CC',
      icon: <Wifi size={64} color="#0033CC" strokeWidth={1.5} />,
      image: "img/wifi.jpeg"
    }
  ];

  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <About />
      
      {products.map((prod, idx) => (
        <ProductSection 
          key={idx}
          id={prod.id}
          reverse={prod.reverse}
          title={prod.title}
          subtitle={prod.subtitle}
          description={prod.description}
          features={prod.features}
          icon={prod.icon}
          image={prod.image}
          bgColor={prod.bgColor}
          themeColor={prod.themeColor}
        />
      ))}

      <FooterCTA />
      <WhatsAppButton />
    </>
  );
}

export default App;
