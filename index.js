const db = require("./src/config/db");
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());
app.use(express.json());


const taskRoutes = require("./src/routes/taskRoutes");


app.use("/api", taskRoutes);






const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
