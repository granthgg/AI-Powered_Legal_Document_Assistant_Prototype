import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import OpenAI from "openai";
config();

const app = express();
export default app;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const port = process.env.PORT || 5000;

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/ask", async (req, res) => {
  const userInput = req.body.prompt;
  const prompt = `System: You are a legal document assistant, You create legal document which consists of all legal clauses as per Indian Law. User: ${userInput}`;
  const completion = await openAI.completions.create({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens: 3000,
    temperature: 0.2,
  });
  res.json({
    role: "Judge",
    answer: completion.choices[0].text,
  });
});

app.post("/upload", async (req, res) => {
  const { File } = req.body;
  res.json({
    msg: "success",
    name: File,
  });
});

app.listen(port, () => {
  console.log("Server running at port " + port);
});
