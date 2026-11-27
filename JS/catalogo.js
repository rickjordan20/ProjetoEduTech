const campo = document.querySelector("#busca");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#resultado");
let itens = [];

function renderizar(filtro) {
  const termo = filtro.trim().toLowerCase();
  const filtrados = itens.filter(item => item.nome.toLowerCase().includes(termo));
  lista.replaceChildren();
  mensagem.textContent = filtrados.length ? "" : "Nenhum curso encontrado.";
  for (const item of filtrados) {
    const card = document.createElement("article");
    const titulo = document.createElement("h3");
    const texto = document.createElement("p");
    titulo.textContent = item.nome;
    texto.textContent = item.categoria + " · " + item.valor + " · " + item.descricao;
    card.append(titulo, texto);
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = "Ver detalhes";
    botao.addEventListener("click", () => {
      alert("Você escolheu: " + item.nome);
    });
    card.append(botao);
    lista.append(card);
  }
}

async function carregar() {
  try {
    const resposta = await fetch("../data/cursos.json");
    if (!resposta.ok) throw new Error("Falha ao carregar os dados");
    itens = await resposta.json();
    renderizar(campo.value);
    campo.disabled = false;
  } catch {
    mensagem.textContent = "Não foi possível carregar a lista.";
  }
}

campo.addEventListener("input", () => renderizar(campo.value));
carregar();
