document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.grid');
  const captions = [
    "Here is our first picture.",
    "Here is our second picture.",
    "Here is our third picture.",
    // تا تصویر شماره 63...
  ];

  for (let i = 1; i <= 63; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundImage = `url('images/grids_${String(i).padStart(2, '0')}.jpg')`;
    cell.onclick = function() {
      showModal(i, captions[i-1]);
    };
    grid.appendChild(cell);
  }
});

function showModal(index, caption) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  modal.style.display = "flex";
  modalImg.src = `images/grids_${String(index).padStart(2, '0')}.jpg`;
  captionText.innerHTML = caption;
  document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
  };
}
