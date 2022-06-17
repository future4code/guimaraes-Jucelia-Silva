type arrayContas = {
    cliente: string,
    saldoTotal: number,
    debitos: number[] 
}

let contasClientes:arrayContas[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


let  candidatoEmprestimo = (contas:arrayContas[]) => {
   
    for (const conta of contasClientes) {
        let somaDebitos = conta.debitos.reduce((soma:number, i:number) => soma += i,0);
        conta.saldoTotal -= somaDebitos
        conta.debitos = []
    }
    let clienteSaldoNegativo = contas.filter((conta) => conta.saldoTotal < 0)
    return clienteSaldoNegativo
}

console.log(candidatoEmprestimo(contasClientes));