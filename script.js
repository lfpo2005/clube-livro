
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".link");

    links.forEach(link => {
        link.addEventListener("mousedown", function () {
            this.style.transform = "scale(0.95)";
            this.style.opacity = "0.8";
        });

        link.addEventListener("mouseup", function () {
            this.style.transform = "scale(1)";
            this.style.opacity = "1";
        });

        link.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.opacity = "1";
        });
    });
});

// Busca os dados do livro no JSON
fetch("book.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("titulo-livro").innerHTML = `<strong>Título:</strong> ${data.titulo}`;
        document.getElementById("tema-livro").innerHTML = `<strong>Tema:</strong> ${data.tema}`;
        document.getElementById("link-aula").href = data.link_aula;
        document.getElementById("estudo-atual").href = data.estudo_atual;
    })
    .catch(error => console.error("Erro ao carregar o livro:", error));
