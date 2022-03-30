const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const router = require("./routers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req, res, next) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
