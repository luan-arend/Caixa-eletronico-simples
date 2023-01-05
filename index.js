let saldo = parseFloat( prompt("Olá usuário, digite sua quantia inicial em reais"))
let opcao = ""

do {
    opcao = prompt("Saldo disponível: R$ " + saldo + 
    "\nEscolha uma das opções abaixo para continuar:" +
    "\n1. Adicionar saldo" + 
    "\n2. Retirar saldo" +
    "\n3. Encerrar:"
    )

switch (opcao) {
    case "1": 
        saldo += parseFloat( prompt("Qual quantia você deseja adicionar?"))
        break
    case "2":
        saldo -= parseFloat( prompt("Qual quantia você deseja retirar?"))
        break
    case "3":
        alert("Saindo...")
        break
    default:
        alert("Entrada inválida")
}

} while (opcao !== "3")