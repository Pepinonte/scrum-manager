import express from "express";
import http from "http";
import morgan from "morgan";
import mysql from "mysql2";
import myConnecion from "express-myconnection";
import path from "path";
import { PORT } from "./config.js";
import cors from "cors";
import { router as customerRoutes } from "./routes/customer.js";
// import bodyParser from "body-parser";

const app = express();

const server = http.createServer(app);

// Middlewares
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(
  myConnecion(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "root",
      port: 3306,
      database: "scrummy",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", customerRoutes);

server.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
