
  document.addEventListener("DOMContentLoaded", () => {
    // pega o nome do arquivo atual (ex: 'ia.html' ou 'index.html')
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // procura todos os links de navegação (header e footer)
    const allLinks = document.querySelectorAll("header nav a, footer a");

    allLinks.forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop();

      // se o href corresponde ao arquivo atual, ativa o destaque
      if (linkPage === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

