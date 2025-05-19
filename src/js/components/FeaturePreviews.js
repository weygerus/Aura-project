export default {
    render({ title = '', subtitle = '', cards = [], imageUrl = '', imageButtonText = '', mainButtonText = '' }) {
        // Make sure each card has image and link properties
        const cardsWithDefaults = cards.map(card => ({
            ...card,
            image: card.image || imageUrl, // Use card's image or default imageUrl
            link: card.link || '#'  // Use card's link or default '#'
        }));

        const defaultCard = cardsWithDefaults.find(c => c.active) || cardsWithDefaults[0] || {};
        const defaultImage = defaultCard.image;
        const defaultLink = defaultCard.link;

        return `
      <section class="info-section">
        <div class="info-container">

        <h2 class="info-title">${title}</h2>
        <p class="info-subtitle">${subtitle}</p>

        
        <div class="info-grid">
        
        ${cardsWithDefaults.map((card, i) => `
            <div class="info-card ${card.active ? 'active' : ''}">
            
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <span class="arrow">→</span>
            </div>
            `).join('')}
          </div>
          
          <div class="info-image-wrapper">
            <img id="info-image" src="${defaultImage}" alt="Info Image" class="info-image" />
            ${imageButtonText ? `<button class="small-btn">${imageButtonText}</button>` : ''}
          </div>
        </div>
      </section>
      
      <script>
        const infoCards = ${JSON.stringify(cardsWithDefaults)};
        
        window.switchInfoCard = function(index) {
          const img = document.getElementById('info-image');
          const btn = document.getElementById('main-action');
          const cards = document.querySelectorAll('.info-card');
          
          cards.forEach((el, i) => {
            el.classList.toggle('active', i === index);
          });
          
          if (img) img.src = infoCards[index].image;
          if (btn) btn.href = infoCards[index].link;
        }
      </script>
    `;
    }
};