// src/js/pages/home.js
import { animate, stagger } from 'animejs';
import Card from '../components/Card.js';
import Hero from '../components/Hero.js';

const heroText = 'Desenvolvemos soluções digitais sob medida para negócios que constroem o futuro. Unindo estratégia, design e engenharia para criar ferramentas capazes de transformar empresas e gerar impacto positivo a econômia e sociedade como um todo.';

export default {
  render() {
    return `
      
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
    `;
  }
};

