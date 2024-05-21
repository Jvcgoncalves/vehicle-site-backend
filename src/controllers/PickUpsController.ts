import Vehicle from "../interfaces/Vehicle";
import pickUpsSchema from "../models/PickUpsModel";

export default class PickUpsController{
  static async getAllPickUps(): Promise<Vehicle[]>{
    try {
      const response = await pickUpsSchema.find();
      return response
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async addAllPickUps(data: any){
    try {
      const response = await pickUpsSchema.create(data) 
      return response
    } catch (error) {
      return error
    }
  }
}