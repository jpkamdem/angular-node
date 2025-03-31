import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 4500;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Simple page");
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ health: "Gud" });
});

app.listen(port, () => {
  console.log(`Serveur lancé : http://0.0.0.0:${port}`);
});
