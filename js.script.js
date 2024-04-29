let estoque = [];
let proximoId = 1;
const NOME_LOJA = "Afrocódigos";
const MOEDA = "R$";

// C => CRIAR
function adicionarProduto(nome, quantidade, preco, descricao) {
  if (isNaN(quantidade) || quantidade < 0 || isNaN(preco) || preco < 0) {
    console.log("Valores inválidos. Não é possível adicionar o produto.");
    return;
  }

  let produto = {
    id: proximoId++,
    nome: nome,
    quantidade: quantidade,
    preco: preco,
    descricao: descricao
  };
  estoque.push(produto);
  console.log(Produto adicionado: ${produto.nome} - ${produto.quantidade} unidades - ${MOEDA} ${produto.preco.toFixed(2)});
}

// R(READ) => LER
function listarProduto() {
  console.log(Produtos no estoque da ${NOME_LOJA}:);
  for (let i = 0; i < estoque.length; i++) {
    let produto = estoque[i];
    console.log(${produto.id}: ${produto.nome} - ${produto.quantidade} unidades - ${MOEDA} ${produto.preco.toFixed(2)});
  }
}

// U => Atualizar
function atualizarProduto(id, informacaoAtualizada) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].id === id) {
      estoque[i] = Object.assign(estoque[i], informacaoAtualizada);
      console.log(Produto ${estoque[i].nome} atualizado.);
      break;
    }
  }
}

// D => Deletar
function removerProduto(id) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].id === id) {
      let removerProduto = estoque.splice(i, 1);
      console.log(Produto removido: ${removerProduto[0].nome});
      return;
    }
  }
  console.log(Produto não encontrado no estoque.);
}

let novoProduto1 = adicionarProduto("Tênis", 30, 12.0, "Tênis da marca Afrocódigos");
let novoProduto2 = adicionarProduto("Camiseta", 20, 25.50, "Camiseta da marca Afrocódigos");
let novoProduto3 = adicionarProduto("Calça", 15, 45.99, "Calça da marca Afrocódigos");
let novoProduto4 = adicionarProduto("Boné", 10, 8.75, "Boné da marca Afrocódigos");
let novoProduto5 = adicionarProduto("Meia", 50, 3.99, "Meia da marca Afrocódigos");

listarProduto()

let estoque = []


function adicionarProduto(nome, quantidade, preco, descricao){
    let produto = {
        id:proximod++,
        nome: nome,
        quantidade: quantidade,
        preco: preço,
        descricao: descricao,
    }
    estoque.push(produto)
}
let novoProduto = adicionarProduto("Tênis", "30, "12,00", "Tênis da marca afrocódigos");
let novoProduto2 = adicionarProduto "Tênis", "30, "12,00", "Tênis da marca afrocódigos");

//R Read) => LER
function listarProduto(){
    for(let i=0; < estoque.length; i++){
        let produto = estoque[i];
        console.log(produto)
    }
}
listarProduto(

function atualizarProduto(id, informacaoAtualizada){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
           estoque[i] = {
            ... estoque,
            ... informacaoAtualizada
           } 
           estoque[i].nome = informacaoAtualizada.nome;
           estoque[i].quantidade = informacaoAtualizada.quantidade;
           estoque[i].preco = informacaoAtualizada.preco;
           estoque[i].descricao = informacaoAtualizada.descricao
           console.log("inf atualizada", estoque[i])
        
        }
    }
}
)
