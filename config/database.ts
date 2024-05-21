const mongoose = require("mongoose");
mongoose.Promise = global.Promise
// 
const port = process.env.MONGO_PORT || "http://localhost:3001/"

mongoose.connect(port)
  .then(() => console.log("Conectado na porta: " + port))
  .catch((err: any) => console.log(err))