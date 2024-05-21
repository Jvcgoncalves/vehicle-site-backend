import Vehicle from "../interfaces/Vehicle";
import hypercarSchema from "../models/HypercarsModel";

export default class HypercarsController{
  
  static async getAllhypercars(): Promise<Vehicle[]>{
    try {
      const response = await hypercarSchema.find();
      return response
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async addhypercarsData(data: any){
    try {
      const response = await hypercarSchema.create(data) 
      return response
    } catch (error) {
      return error
    }
  }

}