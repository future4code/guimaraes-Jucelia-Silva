import express from 'express'
import { Request, Response } from 'express'
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });; 

  type Transaction = {
    name: string,
    cpf: string,
    value: number,
    description: string,
    date?: Date,
    addressee?: string,
    addresseeCpf?: number
  }
  
  type Account = {
    name: string,
    cpf: string,
    birthDate: Date,
    balance: number,
    statement: Array<Transaction>
  }
  
  let users: Account[] = [
    {
      name: "Ana",
      birthDate: new Date("1997-08-02"),
      cpf: "186.676.272-23",
      balance: 5000,
      statement: []
    },
    {
      name: "Vanessa",
      birthDate: new Date("1991-03-01"),
      cpf: "122.131.141-14",
      balance: 1000,
      statement: []
    },
    {
      name: "Adelan",
      birthDate: new Date("1990-01-01"),
      cpf: "222.262.262-66",
      balance: 3000,
      statement: [{
        name: "Adelan",
        cpf: "222.262.262-66",
        value: 500,
        date: new Date("1990-01-01"),
        description: "Olá"
    }]
    },
    {
      name: "Alan",
      birthDate: new Date("1997-01-01"),
      cpf: "555.333.333-55",
      balance: 1000,
      statement: []
    },
    {
      name: "Maria",
      birthDate: new Date("1990-12-02"),
      cpf: "844.448.484-48",
      balance: 1000,
      statement: []
    }
  ]
  
  app.post("/users/create", (req: Request, res: Response) => {
    let codeError: number = 400
  
    try {
      const { name, cpf, birthDate } = req.body
  
      const [day, month, year] = birthDate.split('/')
      const birthFormated: Date = new Date(`${year}-${month}-${day}`)
      const birthDateinMilliseconds = birthFormated.getTime()
      console.log(birthDate)
      console.log(birthDateinMilliseconds)
  
      const ageInMilisseconds: number = Date.now() - birthDateinMilliseconds
      const age: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365
  
      if (age < 18) {
        res.statusCode = 406
        throw new Error("Só maiores de 18 pode criar uma conta.")
      }
  
      const verificaCpf = users.find((conta) => {
        return conta.cpf === cpf
      })
  
      if (verificaCpf) {
        res.statusCode = 406
        throw new Error("Esse CPF já está vinculado a alguma conta!")
      }
  
      users.push({
        name: name,
        cpf: cpf,
        birthDate: birthDate,
        balance: 0,
        statement: []
      })
  
      res.status(201).send({ message: "Usuário criado com sucesso!", users })
    } catch (error: any) {
      res.status(codeError).send({ message: error.message })
    }
  })
  
  app.get('/users', (req: Request, res: Response) => {
    try {
      if (!users) {
        res.statusCode = 404
        throw new Error("Nenhuma conta encontrada!")
      }
      res.status(200).send({ users })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  })
  
  
  app.get('/users/:cpf', (req: Request, res: Response) => {
    let codeError: number = 400
  
    try {
      const cpf = req.params.cpf
      const search = users.filter((user) => {
        if (user.cpf === cpf) {
          return user
        }
      })
  
      if (!search) {
        codeError = 401;
        throw new Error("CPF inválido");
      }
  
      res.status(200).send(search)
  
    } catch (error: any) {
      res.status(codeError).send({ message: error.message })
    }
  })
  
  
  app.put("/usersbalance", (request: Request, response: Response) => {
    let errorCode: number = 400;
  
    try {
      const name = request.body.name
      const cpf = request.body.cpf
      const balance = request.body.balance
  
      const addbalance = users.find((user) => {
        if (user.name === name) {
          return user.balance = user.balance + balance
        }
      })
  
      if (!addbalance) {
        errorCode = 401;
        throw new Error("nome e CPF não correspondem!");
      }
  
      response.status(200).send(addbalance)
  
    } catch (error: any) {
      response.status(errorCode).send({ message: error.message })
    }
  })
  

  app.put("/usersbalance2", (request: Request, response: Response) => {
    let errorCode: number = 400;
  
    try {
      const name = request.body.name
      const cpf = request.body.cpf
      const balance = request.body.balance
      const statement = request.body.statement
  
      const addbalance = users.find((user) => {
        if (user.name === name) {
          return user.statement = statement
        }
      })
  
      if (!addbalance) {
        errorCode = 401;
        throw new Error("nome e CPF não correspondem!");
      }
  
      response.status(200).send(addbalance)
  
    } catch (error: any) {
      response.status(errorCode).send({ message: error.message })
    }
  })
  
  
  
  app.post("/userspayment", (request: Request, response: Response) => {
    let errorCode: number = 400;
  
    try {
      const { name, cpf, balance, statement } = request.body
  
      const addbalance = users.find((user) => {
        if (user.name === name) {
          return user.statement = statement
        }
      })
  
      if (statement.date === "") {
        errorCode = 404
        throw new Error("O pagamento deve ser feito hoje!")
      }
  
      if (!addbalance) {
        errorCode = 401;
        throw new Error("nome e CPF não correspondem!");
      }
  
      response.status(200).send(addbalance)
  
    } catch (error: any) {
      response.status(errorCode).send({ message: error.message })
    }
  })
  
  
  
  app.put("/usersupdatebalance", (request: Request, response: Response): any => {
    let errorCode: number = 400;
  
    try {
      const { name, cpf, balance, statement } = request.body
  
      const convertDate = (date: string): any => {
        const [dia, mes, ano] = date
        const time = new Date(`${ano}-${mes}-${dia}`)
        return time
      }

      const dateCurrente = new Date().getTime()
      dateCurrente > convertDate("11/06/2022")
  
      const client = users.find(user => user.name === name)
  
      if (!client) {
        errorCode = 401;
        throw new Error("Por favor, verifique os campos!");
      }
  
      let dividas = 0;
  
      client.statement.forEach((divida) => {
        if (dateCurrente) {
          dividas += divida.value
        }
      })
      client.balance -= dividas
  
      response.status(200).send(client)
  
    } catch (error: any) {
      response.status(errorCode).send({ message: error.message })
    }
  })

  

