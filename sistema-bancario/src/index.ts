console.log("Hello, world!")

import express from 'express'
import { Request, Response } from 'express'

import { AddressInfo } from "net";

const app = express();

app.use(express.json());



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