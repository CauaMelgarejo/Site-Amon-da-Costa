function openModal(title, text, imgSrc, subtitle = "Subtítulo padrão") {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-subtitle').textContent = subtitle;
  document.getElementById('modal-text').textContent = text;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('backdrop').style.display = 'flex';
  document.body.classList.add('body-no-scroll');
}
  function closeModal() {
    document.getElementById('backdrop').style.display = 'none';
    document.body.classList.remove('body-no-scroll');
  }

