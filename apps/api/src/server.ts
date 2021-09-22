import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
