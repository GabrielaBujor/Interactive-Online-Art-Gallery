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

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}