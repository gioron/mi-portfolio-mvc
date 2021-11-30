const express = require("express");
const app = express();
const port = 3000;
const rutaHome = require("./routers/main.js");
const path = require("path");

app.use(express.static(path.resolve(__dirname,  "./public"))); // para poder acceder a los archivos estaticos

app.use("/", rutaHome);

app.listen(port, () => {
  console.log("Server Running on port " + port);
});
