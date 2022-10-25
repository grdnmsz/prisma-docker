import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const PORT = process.env.PORT || 5000

const prisma = new PrismaClient()

app.use(express.json());

app.get('/', (req, res) => {
  res.json('hello there211ttt2223dd3')
})

app.get('/users', async (req, res) => {
  try { 
    const users = await prisma.user.findMany()
    res.json(users)
  } catch(err) {
    console.log(err)
  }
})

app.post("/user", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      id: req.body.id ?? 1,
      email: req.body.email ?? "Empty todo",
      name: req.body.name ?? "Empty todo",
    },
  });

  return res.json(user);
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})