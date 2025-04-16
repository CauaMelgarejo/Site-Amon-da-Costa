function abrirModal(videoURL){
    const modalVideo = document.getElementById('video-modal')
    const iframe = document.getElementById('video-frame')

    iframe.src = videoURL;
    modalVideo.style.display = 'flex';
}
function fecharModal(){
    const modalVideo = document.getElementById('video-modal');
    const iframe = document.getElementById('video-frame');

    iframe.src = ""
    modalVideo.style.display = 'none';
}