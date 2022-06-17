type ArrayUsuarios = {
    name: string,
    email: string,
    role: string
}

let users:ArrayUsuarios[] = [
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    ] 
	
let buscaAdmin = (user: ArrayUsuarios[]) => {
    let listaEmails = user.filter(
        (user) => { return user.role === "admin"}
    ).map(
        (user) => { return user.email}
    )

    return listaEmails
}

console.log(buscaAdmin(users));