const express = require('express')
import { Request, Response, Router } from "express";
import SuvsController from "../controllers/SuvsController";
const path = require('path')
const fs = require('fs')

const router: Router = express.Router();

router.get("/data", async (req: Request,res: Response) => {
  try {
    const response = await SuvsController.getAllSuvs();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get("/image", (req: Request,res: Response) => {
  if(!fs.existsSync(path.resolve("public","suvs-content", req.query.fileName))){
    res.sendFile(path.resolve( "public","default-not-found-image.svg" ));
    return;
  }
  res.sendFile(path.resolve( "public","suvs-content", req.query.fileName ))
})

router.post("/add-data", async (req: Request, res: Response) => {
  try {
    const response = await SuvsController.addAllSuvs(req.body.data)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router