import Vehicle from "../interfaces/Vehicle";
import bikeSchema from "../models/BikesModel";

export default class BikesController{
  static async getAllBikesData(): Promise<Vehicle[]>{
    try{
      const response = await bikeSchema.find()
      return response
    } catch (error){
      return Promise.reject(error);
    }
  }

  static async addBikeData(data: any){
    try {
      const response = await bikeSchema.create(data)
      return response
    } catch (error) {
      return error
    }
  }
}