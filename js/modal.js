function openModal(title, text, imgSrc, subtitle = "Subtítulo padrão") {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-subtitle').textContent = subtitle;
  document.getElementById('modal-text').textContent = text;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('backdrop').style.display = 'flex';
}
  function closeModal() {
    document.getElementById('backdrop').style.display = 'none';
  }

