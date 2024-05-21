const express = require('express')
import { Router, Request, Response } from "express";
import HypercarsController from "../controllers/HypercarsController";
const path = require('path')
const fs = require('fs')

const router: Router = express.Router();

router.get("/data", async (req: Request,res: Response) => {
  try {
    const response = await HypercarsController.getAllhypercars();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get("/image", (req: Request,res: Response) => {
  if(!fs.existsSync(path.resolve("public","hypercars-content", req.query.fileName))){
    res.sendFile(path.resolve( "public","default-not-found-image.svg" ));
    return;
  }
  res.sendFile(path.resolve( "public","hypercars-content", req.query.fileName ))
})

router.post("/add-data", async (req: Request, res: Response) => {
  try {
    const response = await HypercarsController.addhypercarsData(req.body.data)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router