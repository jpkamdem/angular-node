import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "pong" });
});

app.listen(port, () => {
  console.log(`Serveur lancé : http://127.0.0.1:${port}`);
});
