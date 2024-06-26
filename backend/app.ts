import express, { Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
// configures dotenv to work in your application
dotenv.config()
const app = express()
app.use(cors)

const PORT = process.env.PORT || 4000

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World")
})

app
  .listen(PORT, () => {
    console.log("Server running at port " + PORT + "...")
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message)
  })
