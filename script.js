// Função para converter uma imagem de JPG para PNG
function jpgToPng(input, output) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const png = canvas.toDataURL("image/png");
      output.src = png;
      downloadButton.href = png;
      downloadButton.download = "imagem-convertida.png";
      downloadButton.style.display = "block";
    };
    img.src = URL.createObjectURL(input.files[0]);
  }
  
  // Função para converter uma imagem de PNG para JPG
  function pngToJpg(input, output) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const jpg = canvas.toDataURL("image/jpeg");
      output.src = jpg;
      downloadButton.href = jpg;
      downloadButton.download = "imagem-convertida.jpg";
      downloadButton.style.display = "block";
    };
    img.src = URL.createObjectURL(input.files[0]);
  }
  
  // Exemplo de uso
  const input = document.getElementById("input-file");
  const output = document.getElementById("output-image");
  const downloadButton = document.getElementById("download-button");
  
  input.addEventListener("change", function() {
    if (input.files && input.files[0]) {
      if (input.files[0].type === "image/jpeg") {
        jpgToPng(input, output);
      } else if (input.files[0].type === "image/png") {
        pngToJpg(input, output);
      }
    }
  });
  
  downloadButton.addEventListener("click", function() {
    if (downloadButton.href) {
      downloadButton.click();
    }
  });
  