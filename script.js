const btnPaciente = document.querySelector(".btn-paciente");
const btnAluno = document.querySelector(".btn-aluno");

const inputPaciente = document.getElementById("input-paciente");
const inputAluno = document.getElementById("input-aluno");

btnPaciente.addEventListener("click", function () {
  inputPaciente.style.display = "block";
  inputAluno.style.display = "none";

  btnPaciente.classList.add("selected");
  btnAluno.classList.remove("selected");
});

btnAluno.addEventListener("click", function () {
  inputAluno.style.display = "block";
  inputPaciente.style.display = "none";

  btnAluno.classList.add("selected");
  btnPaciente.classList.remove("selected");
});
