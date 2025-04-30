// Lava rápido do João - 3 serviços
// 1 - Lavagem simples - R$20,00
// 2 - Lavagem Completa - R$ 30,00
// 3 - Enceramento - R$ 50,00
// Apresentar o valor total da compra ou serviço escolhido e valor final e o nome do cliente e placa de veiculo


function EscolherServico(servico) {
    if (servico == 1) {
        return alert(`Serviço escolhido:Lavagem simples\n preço: R$${valor}`);
    } else if (servico == 2) {
        return alert(`Serviço escolhido:Lavagem completa\n preço: R$${valor}`);
    } else if (servico == 3) {
        return alert(`Serviço escolhido:Enceramento\n preço: R$${valor}`);
    }
}

function valor(servico) {
    if (servico == 1) {
      return 20.00
    } else if (servico == 2) {
      return 30.00
    } else if (servico == 3) {
      return 50.00
    }
}

let nome = String(prompt("Digite o nome do cliente: "));
let veiculo = String(prompt("Digite o placa do veiculo: "));
let servico = parseInt(prompt("Escolhar qual serviço gostaria:\n1 - Lavagem simples - R$20,00 \n2 - Lavagem Completa - R$ 30,00\n3 - Enceramento - R$ 50,00 "));

alert(`Nome cliente: ${nome}\nPlaca do veicuolo: ${veiculo}\nServiço escolhido${EscolherServico(servico)}\nValor total: R$${valor(servico)}`)