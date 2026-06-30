import "dotenv/config";

import express from "express";

import { env } from "./env";

const server = express();

server.get("/", (req, res) => {
  return res.send("ok!");
});

server.listen(env.PORT || 3000, () =>
  console.log(`Server is running on ${env.PORT}`),
);
