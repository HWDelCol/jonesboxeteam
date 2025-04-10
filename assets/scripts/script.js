  let contador = document.getElementById("contador");
  let valor = 0;
  let final = 62;

  let intervalo = setInterval(() => {
    if (valor < final) {
      valor++;
      contador.textContent = valor;
    } else {
      clearInterval(intervalo);
    }
  }, 40); // velocidade do contador

  function abrirWhatsapp() {
    const numero = '5511913333804'; // Coloque o número comercial do WhatsApp aqui com DDI e DDD
    const mensagem = encodeURIComponent("Olá, gostaria de saber mais sobre os treinos de boxe!");
    const link = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(link, '_blank');
  }

  let slideAtual = 0;
  const slides = document.querySelectorAll(".card-depoimento");
  const dots = document.querySelectorAll(".dot");

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
        dots[i].classList.add("active");
      }
    });
    slideAtual = index;
  }

  function proximoSlide() {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
  }

  function mudarSlide(index) {
    mostrarSlide(index);
  }

  // Troca automática a cada 6 segundos
  setInterval(proximoSlide, 6000);

  // Iniciar o primeiro slide
  mostrarSlide(0);

  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }

  function verificarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha === "boxe2025") {
      document.getElementById("login").style.display = "none";
      document.getElementById("painel").style.display = "block";
    } else {
      alert("Senha incorreta");
    }
  }

  function logout() {
    document.getElementById("painel").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("senha").value = "";
  }

  document.getElementById('formPost').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const data = document.getElementById('data').value || new Date().toLocaleDateString('pt-BR');
    const resumo = document.getElementById('resumo').value;
    const conteudo = document.getElementById('conteudo').value;

    const slug = titulo.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    const nomeArquivo = `${slug}.html`;

    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>${titulo}</title>
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<link rel="shortcut icon" href="../assets/logo.png" type="image/x-icon">
</head>
<body>

<header>
  <div class="header-container">
    <img src="../assets/logo.png" alt="Logo" class="logo">
    <nav class="nav">
      <div class="menu-toggle" onclick="toggleMenu()">&#9776;</div>
      <ul class="menu">
        <li><a href="../blog.html">Blog</a></li>
      </ul>
    </nav>
  </div>
  <div class="slogan">
      <h1>${titulo}</h1>
  </div>
</header>

<section class="post-detalhe">
  <p class="data">Publicado em ${data}</p>

  <p>${conteudo}</p>

  <p><a href="../blog.html" class="leia-mais">← Voltar para o blog</a></p>
</section>

<footer>
  <p>&copy; 2025 Jones Boxe Team. Todos os direitos reservados.</p>
</footer>

</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = nomeArquivo;
    link.click();
  });