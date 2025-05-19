// src/js/components/Card.js
export default {
  render({ imageUrl, title, description = '', buttonText = '', onClick = null }) {
    return `
      <div class="card animated-card">
        <img src="${imageUrl}" alt="${title}" />
        <h3>${title}</h3>
        <p>${description}</p>
        ${buttonText ? `<button class="card-btn">${buttonText}</button>` : ''}
      </div>
    `;
  }
};
