document.querySelectorAll('h1.glitch').forEach(el=>{
    el.setAttribute('data-text', el.textContent);
  });

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MENU - Scroll suave
    // ==========================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            const id = this.getAttribute("href");

            if (id === "#") return;

            const target = document.querySelector(id);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // ==========================
    // HEADER AO ROLAR
    // ==========================
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.background = "#09090f";
            header.style.boxShadow = "0 0 20px rgba(0,255,255,.2)";

        } else {

            header.style.background = "";
            header.style.boxShadow = "";

        }

    });

    // ==========================
    // BUSCA
    // ==========================

    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");

    const cards = [
        ...document.querySelectorAll(".genre-card"),
        ...document.querySelectorAll(".guide-row")
    ];

    function limpar() {

        cards.forEach(card => {
            card.style.display = "";
            card.style.boxShadow = "";
            card.style.transform = "";
        });

    }

    function pesquisar() {

        const termo = searchInput.value.toLowerCase().trim();

        limpar();

        if (termo === "") return;

        let encontrou = false;

        cards.forEach(card => {

            const texto = card.innerText.toLowerCase();

            if (texto.includes(termo)) {

                encontrou = true;

                card.style.boxShadow = "0 0 25px #00ffff";
                card.style.transform = "scale(1.02)";

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            } else {

                card.style.display = "none";

            }

        });

        if (!encontrou) {

            alert("Nenhum guia encontrado para: " + termo);

            limpar();

        }

    }

    searchButton.addEventListener("click", pesquisar);

    searchInput.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            e.preventDefault();
            pesquisar();

        }

    });

    // ==========================
    // ANIMAÇÃO NAS SEÇÕES
    // ==========================

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".section, .hero").forEach(sec => {

        sec.style.opacity = "0";
        sec.style.transform = "translateY(40px)";
        sec.style.transition = ".7s";

        observer.observe(sec);

    });

    // ==========================
    // BOTÃO COMUNIDADE
    // ==========================

    const comunidade = document.querySelector(".banner .btn");

    comunidade.addEventListener("click", e => {

        e.preventDefault();

        alert(
`🎮 Bem-vindo à comunidade GG.HELP!

Em breve você poderá:

✔ Compartilhar dúvidas
✔ Enviar guias
✔ Pedir ajuda
✔ Conversar com outros jogadores`
        );

    });

    // ==========================
    // EFEITO HOVER NOS CARDS
    // ==========================

    document.querySelectorAll(".genre-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px) scale(1.03)";
            card.style.transition = ".25s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    // ==========================
    // GUIAS CLICÁVEIS
    // ==========================

    document.querySelectorAll(".guide-row").forEach(row => {

        row.style.cursor = "pointer";

        row.addEventListener("click", () => {

            const titulo = row.querySelector("h4").innerText;

            alert("Abrindo guia:\n\n" + titulo);

        });

    });

});