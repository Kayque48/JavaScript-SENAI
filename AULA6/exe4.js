let nome = String(prompt("Insira seu nome de usuário: "));
let itens = 0
let status = "plebeu"


comprar = String(prompt(`Usuário: ${nome}\n
    Nível: ${status}\n Quantidade de Compras: ${itens}\n
    Gostaria de comprar algum item: `))
   
    while(comprar == "sim")  {
         if (itens >= 10) {
           status = "vip";
         }
        alert("Item comprado");
        itens++
        comprar = String(prompt(`Usuário: ${nome}\n
            Nível: ${status}\n
            Quantidade de Compras: ${itens}\n
            Gostaria de continuar a comprar: `));
    }

