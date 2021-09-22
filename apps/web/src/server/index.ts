import express from "express";

const server = express();
const port = process.env.PORT || 3000;

server.get("/", (_req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(`Web is listening on port ${port}`);
});
