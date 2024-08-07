document.addEventListener('DOMContentLoaded', function() {
  const cssFile = document.querySelector('link[rel="stylesheet"]');
  cssFile.href += '?v=' + new Date().getTime();

  const captions = [
    "توضیح تصویر اول",
    "توضیح تصویر دوم",
    "توضیح تصویر سوم",
  ];

  const grid = document.querySelector('.grid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  const closeModal = () => modal.style.display = 'none';

  grid.addEventListener('click', function(event) {
    if (event.target.classList.contains('cell')) {
      const index = Array.from(grid.children).indexOf(event.target);
      modal.style.display = 'flex';
      modalImg.src = event.target.style.backgroundImage.slice(5, -2);
      captionText.textContent = captions[index];
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

window.onload = function() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
};
