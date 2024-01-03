function openLightbox(imageSrc, altText) {
    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.onclick = closeLightbox;
      document.body.appendChild(lightbox);
    }
  
    lightbox.innerHTML = `
      <img src="${imageSrc}" alt="${altText}">
      <p>${altText}</p>
    `;
  
    lightbox.style.display = 'flex';
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }
  
  document.querySelectorAll('.artwork-item img').forEach(image => {
    image.onclick = () => openLightbox(image.src, image.alt);
  });