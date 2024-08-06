document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.grid');
  for (let i = 1; i <= 63; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundImage = `url('images/grids_${String(i).padStart(2, '0')}.jpg')`;
    cell.onclick = function() {
      showModal(i);
    };
    grid.appendChild(cell);
  }
});

function showModal(index) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  modal.style.display = "block";
  modalImg.src = `images/grids_${String(index).padStart(2, '0')}.jpg`;
  captionText.innerHTML = `توضیحات برای قطعه ${index}`;
  document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
  };
}
