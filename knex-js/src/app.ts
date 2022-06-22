import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connected } from "process";
import connection from "./connection";
import { stringify } from "querystring";

const app = express();

app.use(express.json());
app.use(cors());


// Exercício 1
// a) Quando usamos raw, o valor retornado é exatamente o que o banco MySQL devolveu, por isso precisamos especificar
// com o [0] o que queremos que retorne, caso não, retornará informações que não são necessárias para o usuário.

// b)
app.get("/actor/:name", async (req: Request, res: Response) => {
  try {
    const resultado = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${req.params.name}"
    `)
    res.status(200).send({ resultado })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

// c)
app.get("/actors/:gender", async (req: Request, res: Response) => {
  try {
    const resultado = await connection.raw(`
      SELECT COUNT(*) FROM Actor WHERE gender = "${req.params.gender}"
    `)
    res.status(200).send(resultado[0])
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

//Exercício 2
// a)
app.put("/actors/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Actor")
      .update({
        salary: req.body.salary
      })
      .where({ id: req.params.id })
    res.status(200).send({ resultado })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

// b)
app.delete("/actors/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Actor").delete()
      .where({ id: req.params.id })
    res.status(200).send({ resultado })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

// c)
app.get("/actorssalary/:gender", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Actor").avg("salary")
      .where('gender', req.params.gender)
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

//Exercício 3
// a)
app.get("/actorsinfo/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Actor")
      .where('id', req.params.id)
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

// b)
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Actor").count()
      .where({ gender: req.query.gender })
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

//Exercício 4
const createActor = async (
  id: number,
  name: string,
  salary: number,
  birth_date: Date,
  gender: string,
  favorite_ice_cream_flavor: string,
  type: string
) => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      gender: gender,
      birth_date: birth_date,
      favorite_ice_cream_flavor: favorite_ice_cream_flavor,
      type: type

    })
    .into("Actor");
};

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      req.body.birth_date,
      req.body.gender,
      req.body.favorite_ice_cream_flavor,
      req.body.type
    );

    res.status(200).send({
      message: "Success"
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// a)
app.put("/actorupdatesalary/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor")
      .update({
        id: req.body.id,
        salary: req.body.salary
      })
      .where({ id: req.params.id })
    res.status(200).send("Sucess!")
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// b)
app.delete("/actors/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Actor").delete()
      .where({ id: req.params.id })
    res.status(200).send({ resultado })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})