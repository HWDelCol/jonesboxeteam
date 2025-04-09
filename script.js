<<<<<<< HEAD
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
    const numero = '5599999999999'; // Coloque o número comercial do WhatsApp aqui com DDI e DDD
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
=======
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
    const numero = '5599999999999'; // Coloque o número comercial do WhatsApp aqui com DDI e DDD
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
>>>>>>> e8fa8be28fb8b2d15b2065e88ecf18b603f38246
