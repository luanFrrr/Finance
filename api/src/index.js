import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});