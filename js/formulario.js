document.getElementById('contatoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    const numeroWhatsApp = '5599999999999'; // Substitua pelo seu número com DDI + DDD
    const texto = `Olá! Me chamo *${nome}*.

📧 E-mail: ${email}
📞 Telefone: ${telefone}
📝 Mensagem: ${mensagem}`;

    const url = `https://wa.me/${5551985515133}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});
