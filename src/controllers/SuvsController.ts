import Vehicle from "../interfaces/Vehicle";
import suvSchema from "../models/SuvsModel";

export default class SuvsController{
  static async getAllSuvs(): Promise<Vehicle[]>{
    try {
      const response = await suvSchema.find();
      return response
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async addAllSuvs(data: any){
    try {
      const response = await suvSchema.create(data) 
      return response
    } catch (error) {
      return error
    }
  }
}