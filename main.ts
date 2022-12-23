import express, { Express, Request, Response  } from "express";
import env from "dotenv";

// Configuration the .env
env.config();

// Create Express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define firts route
app.get("/", (req: Request, res: Response) => {
  // Send hello word
  res.send("welcome to my API restful with Express + Nodemon + Jest + TS + Swagger + Mongoose");
});

// Execute app and listen request
app.listen(port, () =>
  console.log(`Express server running in http://localhost:${port}`)
);
