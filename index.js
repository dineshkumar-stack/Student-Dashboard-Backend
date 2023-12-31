const db = require("./src/config/db");
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());
app.use(express.json());



const taskRoutes = require("./src/routes/taskRoutes");
const taskBarChartRoutes = require("./src/routes/taskBarChartRoutes");
const userDetailRoutes = require("./src/routes/userDetailRoutes");
const authRoutes = require('./src/routes/authRoutes')
const codekataRoutes = require('./src/routes/codekata')
const webkataRoutes = require('./src/routes/webkata')


app.use("/api", taskRoutes);
app.use("/api", taskBarChartRoutes);
app.use("/api", userDetailRoutes);
app.use("/api",authRoutes);
app.use("/api", codekataRoutes)
app.use("/api", webkataRoutes)



const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
