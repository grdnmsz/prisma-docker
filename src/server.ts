import express from "express";

const app = express();
const PORT = 5000;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('hello there')
})

app.get('/users', async (req, res) => {
  try { 
    const users = await prisma.user.findMany()
    res.json(users)
  } catch(err) {
    console.log(err)
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})