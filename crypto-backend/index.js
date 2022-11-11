const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const postRoute = require("./router/index");

app.use(express.json());
app.use(cors());

app.use("/all", postRoute);
app.get("/", (req, res) => {
    res.send("<h1>HEHEHEHEHEH</h1>");
});

app.listen(PORT, console.log("Server running on port https://localhost:3001"));