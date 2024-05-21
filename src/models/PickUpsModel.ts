const mongoose = require("mongoose");

const pickUpsSchema = new mongoose.Schema({
  vehicle_name: { type: String, required: true },
  vehicle_description: { type: String, required: true },
  engine_model: { type: String, required: true },
  engine_power: { type: String, required: true },
  torque: { type: String, required: true },
  transmission: { type: String, required: true },
  weight: { type: String, required: true },
  price: { type: Number, required: true },
  fuel_tank: { type: String, required: true },
  curiosities: { type: [String], required: true },
  image_path: { type: String, required: true }
})

export default mongoose.model("pick-ups", pickUpsSchema)