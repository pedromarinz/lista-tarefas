let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
  //PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value

  //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
   if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {

    ++contador;

    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
          <i id="icone_${contador}" class="fa-regular fa-circle"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete">
            <i class="fa-solid fa-trash"></i> Deletar
          </button>
        </div>
      </div>`;

    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR OS CAMPINHOS
    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  let item = document.getElementById(id);
  let icone = document.getElementById("icone_" + id);

  if (!item.classList.contains("clicado")) {
    item.classList.add("clicado");
    icone.classList.remove("fa-regular", "fa-circle");
    icone.classList.add("fa-solid", "fa-circle-check");
    main.appendChild(item);
  } else {
    item.classList.remove("clicado");
    icone.classList.remove("fa-solid", "fa-circle-check");
    icone.classList.add("fa-regular", "fa-circle");
  }
}

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});

