import express, { Express, Request, Response  } from "express";
import env from "dotenv";

// Configuration the .env
env.config();

// Create Express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define firts route
app.get("/", (req: Request, res: Response) => {
  let name: any = req.query.name;
  if (name == undefined) name = "anonimo";
  const message : string = `Hola, ${name}`
  const json:object = {"data": {
    "message":message
  }}
  res.status(200).send(json);
});

app.get("/", (req: Request, res: Response) => {
  const json:object = {"data": {
    "message":"Goodby, world"
  }}
  res.status(200).send(json);
});

// Execute app and listen request
app.listen(port, () =>
  console.log(`Express server running in http://localhost:${port}`)
);
