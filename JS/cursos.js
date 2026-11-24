/* =========================== 
1) PEGAR OS ELEMENTOS NO HTML
============================== */

// Onde os cards vão aparecer
const listaCursos = document.querySelector("#listaCursos");

// Campo de busca
const buscaCursos = document.querySelector("#buscaCursos");

/* =========================== 
2) CRIAR UMA VARIÁVEL PARA GUARDAR OS CURSOS
============================== */
let cursos = []; // aqui vai ficar a lista carregada do JSON

/* =========================== 
3) FUNÇÃO PARA CARREGAR O JSON
============================== */
function carregarCursos(){
    // busca o arquivo cursos.json (como se fosse uma mini API)
    const resposta = fetch("../DATA/cursos.json");

    // transforma o JSON em dados que o JS entende
    cursos = resposta.json();

    //depois de carregar, já renderiza na tela
    renderizarCursos(cursos);
}

/* =========================== 
4) FUNÇÃO PARA CRIAR OS CARDS NA TELA (DOM)
============================== */
function renderizarCursos(lista){
    // limpa o conteúdo antes de desenhar de novo
    listaCursos.innerHTML = ""

    // para cada curso da lista, cria um card
    lista.forEach((curso) => {
        // cria um elemento HTML <div>
        const card = document.createElement("div");
        
        //coloca uma classe (para o CSS estilizar)
        card.classList.add("card-curso");

        

        // coloca o conteúdo dentro do CARD de Curso
        card.innerHTML = `
        <h3>${curso.titulo}</h3>
        <img src="${curso.img}">
        <p>${curso.descricao}</p>
        <p><strong>CH:</strong>${curso.cargaHoraria}h</p>
        `
    

        //coloca o card dentro da lista de cursos]
        listaCursos.appendChild(card);
        
        // evento do botão "Ver detalhes"
        const btn = card.querySelector("#btn-detalhes");
        btn.addEventListener("click", function(){
            alert("Voce escolheu: "+curso.titulo)
        })
    })
}
/* =========================== 
5) BUSCA: FILTRAR A LISTA QUANDO DIGITAR
============================== */
buscaCursos.addEventListener("input", function(){
    //pega o que a pessoa digitou no campo busca e guarda na variavel
    const texto = buscaCursos.value.toLowerCase(); 

    const filtrados = cursos.filter((curso)=>
    curso.titulo.toLowerCase().includes(texto)
    );
    
    renderizarCursos(filtrados);
})

/* =========================== 
6) CHAMA A FUNÇÃO PARA INICIAR TUDO
============================== */
carregarCursos();