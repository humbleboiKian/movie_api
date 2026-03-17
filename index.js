const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const moviesRoute = require("./routes/movies");
app.use("/api/movies", moviesRoute);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(3333, () => {
  console.log("Server running on port 3333");
});