import express from "express";
import { prisma } from "@repo/db/prisma";
const app = express();

app.listen(3001);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hey there from the http server",
  });
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({
    message: "Signed up successfuly",
  });
});
