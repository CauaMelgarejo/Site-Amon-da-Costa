function openModal(title, text, imgSrc) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('backdrop').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('backdrop').style.display = 'none';
  }

