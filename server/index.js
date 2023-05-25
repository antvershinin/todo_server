const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./database/db");

const app = express();
const routes = require("./routers/routers");
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use("/todos", routes);
app.get("/", (req, res) => res.send("Server running"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
