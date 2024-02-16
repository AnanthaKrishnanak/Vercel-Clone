import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

const port = 3000;

app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
