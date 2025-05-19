export default {
  render({ title, paragraph, button1Text = '', button2Text = '', imageUrl = '' }) {
    return `
      <div class="hero">
        <div class="hero-content">
          <div class="hero-tag">
            <i style="color: white;" class="fa-solid fa-wand-magic-sparkles"></i>
            Tecnologia que impulsiona
          </div>
          <h1>${title}</h1>
          <p>${paragraph}</p>
          <div class="hero-buttons">
            ${button1Text ? `<button class="primary-btn">${button1Text}</button>` : ''}
            ${button2Text ? `<button class="secondary-btn">${button2Text}</button>` : ''}
          </div>
        </div>
        <div class="hero-image-wrapper">
          <img class="hero-image" src="${imageUrl}" alt="Hero Image" />
        </div>
      </div>
    `;
  }
};
