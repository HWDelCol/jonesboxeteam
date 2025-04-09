const fs = require('fs');
const path = require('path');

const posts = require('../../db/posts.json');
const postsDir = path.join(__dirname, '../../posts');
const blogPath = path.join(__dirname, '../../blog.html');

// Garante que a pasta posts existe
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
}

// Gera cada post como HTML
posts.forEach(post => {
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>${post.titulo}</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="../assets/style/styles.css">
  <link rel="shortcut icon" href="../../assets/img/logo.png" type="image/x-icon">
</head>
<body>

  <header>
    <div class="header-container">
      <img src="../assets/img/logo.png" alt="Logo" class="logo">
      <nav class="nav">
        <div class="menu-toggle" onclick="toggleMenu()">&#9776;</div>
        <ul class="menu">
          <li><a href="../blog.html">Blog</a></li>
        </ul>
      </nav>
    </div>
    <div class="slogan">
      <h1>${post.titulo}</h1>
    </div>
  </header>

  <section class="post-detalhe">
    <p class="data">Publicado em ${post.data}</p>
    ${post.conteudo}
    <p><a href="../blog.html" class="leia-mais">← Voltar para o blog</a></p>
  </section>

  <footer>
    <p>&copy; 2025 Jones Boxe Team. Todos os direitos reservados.</p>
  </footer>

</body>
</html>`;

  fs.writeFileSync(`${postsDir}/${post.slug}.html`, html);
  console.log(`✅ Post gerado: ${post.slug}.html`);
});

// Monta o blog.html com todos os cards
const cards = posts.map(post => {
  return `
    <div class="post">
      <h3>${post.titulo}</h3>
      <p class="data">Publicado em ${post.data}</p>
      <p class="resumo">${post.resumo}</p>
      <a href="posts/${post.slug}.html" class="leia-mais">Leia mais</a>
    </div>
  `;
}).join('\n');

const blogHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Blog | Jones Boxe Team</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="assets/style/styles.css">
  <link rel="shortcut icon" href="assets/img/logo.png" type="image/x-icon">
</head>
<body>

  <header>
    <div class="header-container">
      <img src="assets/img/logo.png" alt="Logo" class="logo">
      <nav class="nav">
      <div class="menu-toggle" onclick="toggleMenu()">&#9776;</div>
        <ul class="menu">
          <li><a href="index.html">Início</a></li>
          <li<<a href="blog.html">Blog</a></li>
        </ul>
      </nav>
    </div>
    <div class="slogan">
      <h1>Blog Oficial</h1>
      <p>Dicas, treinos e motivação</p>
    </div>
  </header>

  <section class="blog">
    <h2>Últimos Posts</h2>
    ${cards}
  </section>

  <footer>
    <p>&copy; 2025 Jones Boxe Team. Todos os direitos reservados.</p>
  </footer>

</body>
</html>`;

fs.writeFileSync(blogPath, blogHtml);
console.log('✅ blog.html atualizado com todos os posts!');
