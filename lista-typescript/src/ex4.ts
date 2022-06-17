enum setores {
    MARKETING="Marketing",
    VENDAS="Vendas",
    FINANCEIRO="Financeiro"
}


type ArrayInfoFuncionarios = {
	nome: string,
	salário: number,
	setor:string,
	presencial: boolean
}

let array: ArrayInfoFuncionarios[]   = [
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]


let buscaMarktPresencial = (array: ArrayInfoFuncionarios[]) => {
	let funcMarktPresencial = array.filter(
		(arr) => {return arr.setor === setores.MARKETING && arr.presencial === true}
	)
	return funcMarktPresencial
}