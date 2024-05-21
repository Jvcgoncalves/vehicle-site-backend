import Vehicle from "../interfaces/Vehicle";
import carsSchema from "../models/CarsModel"

export default class CarsController{
  
  static async getAllCars(): Promise<Vehicle[]>{
    try {
      const response = await carsSchema.find();
      return response
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async addCarsData(data: any){
    try {
      const response = await carsSchema.create(data) 
      return response
    } catch (error) {
      return error
    }
  }
}