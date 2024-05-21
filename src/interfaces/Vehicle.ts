export default interface Vehicle {
  vehicle_name: string;
  vehicle_description: string;
  engine_model: string;
  engine_power:   string;
  torque: string;
  transmission: string;
  weight:   string;
  price: number;
  fuel_tank:   string;
  curiosities: [string, string, string, string];
  image_path: string;
  
}