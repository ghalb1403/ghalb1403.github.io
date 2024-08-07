document.addEventListener('DOMContentLoaded', function() {
  const cssFile = document.querySelector('link[rel="stylesheet"]');
  cssFile.href += '?v=' + new Date().getTime();

  const grid = document.querySelector('.grid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  const closeModal = () => modal.style.display = 'none';

  grid.addEventListener('click', function(event) {
    if (event.target.classList.contains('cell')) {
      modal.style.display = 'flex';
      modalImg.src = event.target.style.backgroundImage.slice(5, -2);
      captionText.textContent = 'توضیحات تصویر اینجا';
    }
  });

  document.querySelector('.close').addEventListener('click', closeModal);

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
