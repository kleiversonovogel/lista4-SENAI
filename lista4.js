const botaoEx1 = document.getElementById("Ex1");
botaoEx1.addEventListener("click",Ex1);

const botaoEx2 = document.getElementById("Ex2");
botaoEx2.addEventListener("click",Ex2);

const botaoEx3 = document.getElementById("Ex3");
botaoEx3.addEventListener("click",Ex3);

const botaoEx4 = document.getElementById("Ex4");
botaoEx4.addEventListener("click",Ex4);

const botaoEx5 = document.getElementById("Ex5");
botaoEx5.addEventListener("click",Ex5);

const botaoEx6 = document.getElementById("Ex6");
botaoEx6.addEventListener("click",Ex6);

const botaoEx7 = document.getElementById("Ex7");
botaoEx7.addEventListener("click",Ex7);

const botaoEx8 = document.getElementById("Ex8");
botaoEx8.addEventListener("click",Ex8);

function Ex1(){
let soma = 0;
let vendasDoDia = [10.70, 5.50, 2.25, 1.0, 55.25, 110.30, 80.0];

for (let i = 0; i < vendasDoDia.length; i++) {
  soma += vendasDoDia[i];
}

alert("Fechamento das vendas do dia:"+ " " + soma);
}

function Ex2(){
let vendasDoDia0 = [10.70, 5.50, 2.25, 1.0, 55.25, 110.30, 80.0];
let maiornumero = vendasDoDia0[0];
let menornumero = vendasDoDia0[0];

for (let i = 0; i < vendasDoDia0.length; i++) {
    if (vendasDoDia0[i] > maiornumero) {
        maiornumero = vendasDoDia0[i];
    }
    if (vendasDoDia0[i] < menornumero) {
        menornumero = vendasDoDia0[i];
    }
}
alert("A compra de maior valor: "  + maiornumero + "\nE a compra de menor valor: " + menornumero);
}

function Ex3(){ 
let ticketMedio = Ex1() / vendasDoDia.length;
ticketMedio = Math.round(ticketMedio * 100) / 100;

alert("O ticket médio é R$" + ticketMedio);
}

function Ex4(){
let lista = [ 3, 5, 6, 7, 8, 10, 22, 55, 110 ];
let contador = 0;
  for (let i = 0; i < lista.length; i++){
    if (lista[i] % 2 == 0) {
        contador++
    }
  }
alert("Quantidade de números pares: " + contador);
}

function Ex5(){
let lista = [];
let opcao;

    do {
        opcao = prompt(
            "Lista de Compras:\n" +
            "1 - Adicionar item\n" +
            "2 - Ver lista\n" +
            "3 - Sair"
        );

        switch (opcao) {
            case "1":
                let item = prompt("Digite o nome do item:");
                if (item.trim() !== "") {
                    lista.push(item.trim());
                    alert(`Item "${item}" adicionado!`);
                } else {
                    alert("Item inválido.");
                }
                break;

            case "2":
                if (lista.length === 0) {
                    alert("A lista está vazia.");
                } else {
                    alert("Itens na lista:\n- " + lista.join("\n- "));
                }
                break;

            case "3":
                alert("Saindo da lista de compras. Até logo!");
                break;

            default:
                alert("Opção inválida. Tente novamente.");
        }

    } while (opcao !== "3");
}

function Ex6(){
let lista = [];
let opcao;

    do {
        opcao = prompt(
            "Lista de Compras:\n" +
            "1 - Adicionar item\n" +
            "2 - Ver lista\n" +
            "3 - Remover item\n" +
            "4 - Sair"
        );

        switch (opcao) {
            case "1":
                let item = prompt("Digite o nome do item:");
                if (item.trim() !== "") {
                    lista.push(item.trim());
                    alert(`Item "${item}" adicionado!`);
                } else {
                    alert("Item inválido.");
                }
                break;

            case "2":
                if (lista.length === 0) {
                    alert("A lista está vazia.");
                } else {
                    alert("Itens na lista:\n- " + lista.join("\n- "));
                }
                break;

            case "3":
                if (lista.length === 0) {
                    alert("A lista está vazia. Nada para remover.");
                } else {
                    let listaFormatada = lista
                        .map((item, index) => `${index + 1} - ${item}`)
                        .join("\n");
                    let indice = prompt(
                        "Escolha o número do item que deseja remover:\n" + listaFormatada
                    );
                    let pos = parseInt(indice) - 1;

                    if (!isNaN(pos) && pos >= 0 && pos < lista.length) {
                        let removido = lista.splice(pos, 1);
                        alert(`Item "${removido}" removido com sucesso!`);
                    } else {
                        alert("Número inválido.");
                    }
                }
                break;

            case "4":
                alert("Saindo da lista de compras. Até logo!");
                break;

            default:
                alert("Opção inválida. Tente novamente.");
        }

    } while (opcao !== "4");
}

function Ex7(){
let lista = [];
let precos = [];
let opcao;

    do {
        opcao = prompt(
            "Lista de Compras:\n" +
            "1 - Adicionar item\n" +
            "2 - Ver lista\n" +
            "3 - Remover item\n" +
            "4 - Sair"
        );

        switch (opcao) {
            case "1":
                let item = prompt("Digite o nome do item:");
                if (item.trim() !== "") {
                    let preco = parseFloat(prompt("Digite o preço do item (use ponto para decimal):"));
                    if (!isNaN(preco) && preco >= 0) {
                        lista.push(item.trim());
                        precos.push(preco);
                        alert(`Item "${item}" adicionado com preço R$${preco.toFixed(2)}!`);
                    } else {
                        alert("Preço inválido.");
                    }
                } else {
                    alert("Item inválido.");
                }
                break;

            case "2":
                if (lista.length === 0) {
                    alert("A lista está vazia.");
                } else {
                    let resultado = "Itens na lista:\n";
                    for (let i = 0; i < lista.length; i++) {
                        resultado += `${i + 1} - ${lista[i]}: R$${precos[i].toFixed(2)}\n`;
                    }
                    alert(resultado);
                }
                break;

            case "3":
                if (lista.length === 0) {
                    alert("A lista está vazia. Nada para remover.");
                } else {
                    let listaFormatada = lista
                        .map((item, index) => `${index + 1} - ${item}: R$${precos[index].toFixed(2)}`)
                        .join("\n");
                    let indice = prompt(
                        "Escolha o número do item que deseja remover:\n" + listaFormatada
                    );
                    let pos = parseInt(indice) - 1;

                    if (!isNaN(pos) && pos >= 0 && pos < lista.length) {
                        let removido = lista.splice(pos, 1);
                        let precoRemovido = precos.splice(pos, 1);
                        alert(`Item "${removido}" removido com preço R$${precoRemovido[0].toFixed(2)}!`);
                    } else {
                        alert("Número inválido.");
                    }
                }
                break;

            case "4":
                alert("Saindo da lista de compras. Até logo!");
                break;

            default:
                alert("Opção inválida. Tente novamente.");
        }

    } while (opcao !== "4");
}

function Ex8(){
let lista = [];
let precos = [];
let opcao;

    do {
        opcao = prompt(
            "Lista de Compras:\n" +
            "1 - Adicionar item\n" +
            "2 - Ver lista\n" +
            "3 - Remover item\n" +
            "4 - Ver lista ordenada por preço (crescente)\n" +
            "5 - Sair"
        );

        switch (opcao) {
            case "1":
                let item = prompt("Digite o nome do item:");
                if (item.trim() !== "") {
                    let preco = parseFloat(prompt("Digite o preço do item (use ponto para decimal):"));
                    if (!isNaN(preco) && preco >= 0) {
                        lista.push(item.trim());
                        precos.push(preco);
                        alert(`Item "${item}" adicionado com preço R$${preco.toFixed(2)}!`);
                    } else {
                        alert("Preço inválido.");
                    }
                } else {
                    alert("Item inválido.");
                }
                break;

            case "2":
                if (lista.length === 0) {
                    alert("A lista está vazia.");
                } else {
                    let resultado = "Itens na lista:\n";
                    for (let i = 0; i < lista.length; i++) {
                        resultado += `${i + 1} - ${lista[i]}: R$${precos[i].toFixed(2)}\n`;
                    }
                    alert(resultado);
                }
                break;

            case "3":
                if (lista.length === 0) {
                    alert("A lista está vazia. Nada para remover.");
                } else {
                    let listaFormatada = lista
                        .map((item, index) => `${index + 1} - ${item}: R$${precos[index].toFixed(2)}`)
                        .join("\n");
                    let indice = prompt(
                        "Escolha o número do item que deseja remover:\n" + listaFormatada
                    );
                    let pos = parseInt(indice) - 1;

                    if (!isNaN(pos) && pos >= 0 && pos < lista.length) {
                        let removido = lista.splice(pos, 1);
                        let precoRemovido = precos.splice(pos, 1);
                        alert(`Item "${removido}" removido com preço R$${precoRemovido[0].toFixed(2)}!`);
                    } else {
                        alert("Número inválido.");
                    }
                }
                break;

            case "4":
                if (lista.length === 0) {
                    alert("A lista está vazia.");
                } else {
                    // Criar array de objetos combinando nome e preço
                    let itensComPreco = lista.map((item, index) => {
                        return { nome: item, preco: precos[index] };
                    });

                    // Ordenar por preço crescente
                    itensComPreco.sort((a, b) => a.preco - b.preco);

                    // Montar string para exibir
                    let ordenada = "Lista ordenada por preço (crescente):\n";
                    itensComPreco.forEach((item, i) => {
                        ordenada += `${i + 1} - ${item.nome}: R$${item.preco.toFixed(2)}\n`;
                    });

                    alert(ordenada);
                }
                break;

            case "5":
                alert("Saindo da lista de compras. Até logo!");
                break;

            default:
                alert("Opção inválida. Tente novamente.");
        }

    } while (opcao !== "5");
}
