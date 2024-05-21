const express = require('express')
import { Request, Response } from "express";
const path = require('path')
import BikesController from "../controllers/BikesController";
const fs = require('fs')

const router = express.Router();

router.get("/data", async (req: Request,res: Response) => {
  try {
    const response = await BikesController.getAllBikesData()
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get("/image", async (req: Request,res: Response) => {
  if(!fs.existsSync(path.resolve("public","bikes-content", req.query.fileName))){
    res.sendFile(path.resolve( "public","default-not-found-image.svg" ));
    return;
  }
  res.sendFile(path.resolve( "public","bikes-content", req.query.fileName ))
})

router.post('/add-data', async (req: Request,res: Response) => {
  try {
    const response = await BikesController.addBikeData(req.body.data)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router