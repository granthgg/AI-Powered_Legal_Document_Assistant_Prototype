import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import OpenAI from "openai";
config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const port = process.env.PORT || 5000;

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/ask", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openAI.completions.create({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens: 1000,
    temperature: 0.3,
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
