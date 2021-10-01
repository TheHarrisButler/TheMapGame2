import express from "express";
import initializeDatabase from "./core/database";

const app = express();
const port = process.env.PORT || 4000;

//Initialize DB and start server
async function start() {
  try {
    await initializeDatabase();
  } catch (error) {
    console.log(
      `
      
    This is an error on DB initialization

    `,
      error
    );
  }
  app.get("/", (_req, res) => {
    res.send("Hello World!");
  });
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

void start();
