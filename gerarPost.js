const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Utilitário para gerar slug a partir do título
function gerarSlug(titulo) {
  return titulo.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Gerador de Post - Jones Boxe Team\n");

rl.question("Título do post: ", (titulo) => {
  const slug = gerarSlug(titulo);
  const caminhoPost = path.join(__dirname, 'posts', `${slug}.html`);
  const caminhoBlog = path.join(__dirname, 'blog.html');

  rl.question("Data de publicação (ex: 10/04/2025) [pressione Enter para usar hoje]: ", (dataInput) => {
    const data = dataInput || new Date().toLocaleDateString('pt-BR');

    rl.question("Resumo do post (para aparecer na lista):\n", (resumo) => {

      rl.question("Conteúdo completo do post (HTML ou texto puro):\n", (conteudo) => {

        // Criação do arquivo do post individual
        const htmlPost = `<!DOCTYPE html>
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

        fs.writeFileSync(caminhoPost, htmlPost);
        console.log(`\n✅ Post criado: posts/${slug}.html`);

        // Atualizar o blog.html
        const blogHtml = fs.readFileSync(caminhoBlog, 'utf8');
        const novoCard = `
    <div class="post">
      <h3>${titulo}</h3>
      <p class="data">Publicado em ${data}</p>
      <p class="resumo">${resumo}</p>
      <a href="posts/${slug}.html" class="leia-mais">Leia mais</a>
    </div>`;

        const atualizado = blogHtml.replace('<!-- POSTS -->', `<!-- POSTS -->\n${novoCard}`);
        fs.writeFileSync(caminhoBlog, atualizado);
        console.log(`✅ blog.html atualizado com o novo post.`);

        rl.close();
      });
    });
  });
});
