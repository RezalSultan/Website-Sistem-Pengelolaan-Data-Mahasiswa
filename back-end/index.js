require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { createServer } = require("http");
const cors = require("cors")
const router = require("./routes/mahasiswaRoutes")
const routerAdmin = require("./routes/adminRoutes")

const app = express();
const PORT = `${process.env.PORT}`;
const server = createServer(app);

app.use(cors())
app.use(bodyParser.json()).use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
   console.log("Terjadi request ke PATH : ", req.path)
   next()
})

app.use(router);
app.use(routerAdmin);

server.listen(PORT, () => {
   console.log(`Server has been running in http://localhost:${PORT}`);
});