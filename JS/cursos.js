const cursos = [
  { nome: "Desenvolvimento Web", cargaHoraria: 40, vagas: 8 },
  { nome: "Informática Básica", cargaHoraria: 30, vagas: 1 },
  { nome: "Jogos Digitais", cargaHoraria: 60, vagas: 0 }
];

function verificarVagas(vagas) {
  if (vagas > 1) return "Inscrições abertas";
  if (vagas === 1) return "Última vaga";
  return "Turma lotada";
}

cursos.forEach(function (curso) {
  console.log(curso.nome + " | " + curso.cargaHoraria + "h | " + verificarVagas(curso.vagas));
});
