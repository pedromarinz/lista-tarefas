let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
  //PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value

  //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
  
  ++contador;
  
   if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    let novoItem = `<div id="${contador}" class="item">
        <div class="item-icone">
          <span class="material-symbols-outlined"> <i class="fa-regular fa-circle"></i>  </span>
        </div>
        <div class="item-nome">${valorInput}</div>
        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete"> <i class="fa-solid fa-trash"></i> Deletar </button>
        </div>
      </div>`

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

input.addEventListener("keyup", function(event) {
  //SE TECLOU ENTER (13)
  if(event.keyCode ===13) {
    event.preventDefault();
    btnAdd.click();
  }
})
