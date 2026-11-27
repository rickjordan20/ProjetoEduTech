const campo = document.querySelector("#busca");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#resultado");
let itens = [];

function renderizar(filtro) {
  const termo = filtro.trim().toLowerCase();
  const filtrados = itens.filter(item => item.nome.toLowerCase().includes(termo));
  lista.replaceChildren();
  mensagem.textContent = filtrados.length ? "" : "Nenhum prato encontrado.";
  for (const item of filtrados) {
    const card = document.createElement("article");
    const titulo = document.createElement("h3");
    const texto = document.createElement("p");
    titulo.textContent = item.nome;
    texto.textContent = item.categoria + " · " + item.valor + " · " + item.descricao;
    card.append(titulo, texto);
    lista.append(card);
  }
}

async function carregar() {
  try {
    const resposta = await fetch("../data/cardapio.json");
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
