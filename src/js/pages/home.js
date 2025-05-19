// Updated home.js to provide the necessary image and link properties for each card
import { animate, stagger } from 'animejs';
import Card from '../components/Card.js';
import Hero from '../components/Hero.js';
import FeaturePreviews from '../components/FeaturePreviews.js';

const heroText = 'Desenvolvemos soluções digitais sob medida para negócios que constroem o futuro. Unindo estratégia, design e engenharia para criar ferramentas capazes de transformar empresas e gerar impacto positivo a econômia e sociedade como um todo.';

export default {
  render() {
    return `
      <section class="hero-section">
        ${Hero.render({
      backgroundImageUrl: 'https://via.placeholder.com/600x400/7f5af0/ffffff?text=Hero+Image',
      title: 'Boas vindas! Somos a Aura.',
      paragraph: heroText,
      button1Text: 'Começar',
      button2Text: 'Saber mais'
    })}
      </section>
      
      <section class="preview">
        ${Card.render({
      imageUrl: 'https://via.placeholder.com/300x200/7f5af0/ffffff?text=Dashboard',
      title: 'Dashboard',
      description: 'Visualize dados em tempo real.',
      buttonText: 'Ver Demo'
    })}
        ${Card.render({
      imageUrl: 'https://via.placeholder.com/300x200/7f5af0/ffffff?text=CRUD',
      title: 'CRUD',
      description: 'Gerencie dados facilmente.',
      buttonText: 'Testar'
    })}
      </section>
      
      ${FeaturePreviews.render({
      title: 'Descubra o que sua equipe pode alcançar',
      subtitle: 'Potencialize suas operações com recursos modernos e integração fluida.',
      imageUrl: 'https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Default+Image',
      imageButtonText: 'Ver Detalhes',
      mainButtonText: 'Comece Agora',
      cards: [
        {
          title: 'Visão Geral',
          description: 'Monitoramento centralizado e dados em tempo real.',
          active: true,
          image: 'https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Visao+Geral',
          link: '/visao-geral'
        },
        {
          title: 'Recursos',
          description: 'Funcionalidades adaptadas ao seu crescimento.',
          image: 'https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Recursos',
          link: '/recursos'
        },
        {
          title: 'Segurança',
          description: 'Proteção avançada para todos os seus dados.',
          image: 'https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Seguranca',
          link: '/seguranca'
        },
        {
          title: 'Desempenho',
          description: 'Alta performance com escalabilidade garantida.',
          image: 'https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Desempenho',
          link: '/desempenho'
        }
      ]
    })}
    `;
  }
};