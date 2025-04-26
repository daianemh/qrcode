const qrImage = document.getElementById('qrImage');
const userInput = document.getElementById('userInput');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
  const data = userInput.value.trim();
  if (data !== "") {
    // Gera a URL da API para o QR Code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(data)}`;
    qrImage.src = qrUrl;
  } else {
    qrImage.src = "";
    alert("Por favor, digite um texto ou URL para gerar o QR Code.");
  }
});
