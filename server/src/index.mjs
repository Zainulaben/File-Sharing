import express, { request, response } from "express";
import uploadRouter from "./router/upload.mjs";
import cors from "cors";
import DBconnection from "./database/db.mjs";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", uploadRouter);

const Port = 3000;

DBconnection();

app.listen(Port, () => {
  console.log(`Running on Port: ${Port}`);
});
