document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.grid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');

  grid.addEventListener('click', function(event) {
    if (event.target.classList.contains('cell')) {
      modal.style.display = 'flex';
      modalImg.src = event.target.style.backgroundImage.slice(5, -2);
      captionText.textContent = 'توضیحات تصویر اینجا';
    }
  });

  document.querySelector('.close').addEventListener('click', function() {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
