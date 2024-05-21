const express = require('express')
const cors = require('cors')
import { Express, Request, Response } from "express";

import suvs_routes from "./routes/suvs_routes"
import cars_routes from "./routes/cars_routes"
import bikes_routes from "./routes/bikes_routes"
import hypercars_routes from "./routes/hypercars_routes"
import pickUps_routes from "./routes/pickUps_routes"
const path = require("path");

import "../config/database"

const app: Express = express()
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))

app.use(cors())
app.use("/cars", cars_routes)
app.use("/suvs", suvs_routes)
app.use("/bikes", bikes_routes)
app.use("/hypercars", hypercars_routes)
app.use("/pickUps", pickUps_routes)

app.use("/", (req: Request, res: Response) =>{
  res.send("<h2>Funcionando o servidor</h2>")
})

app.listen(port,() => {
  console.log("Server rodando na dasdas " + port);
})