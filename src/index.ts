import express, { json } from "express";
import cors from "cors";
import { simpleGit, SimpleGit, CleanOptions } from "simple-git";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { getAllFilePaths } from "./utils/getAllFilePaths";
import { uploadFile } from "./utils/uploadFile";

const git: SimpleGit = simpleGit().clean(CleanOptions.FORCE);

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

//deployment service
app.get("/deploy", async (req, res) => {
  const id = uuidv4();
  const folderPath = `./files/${id}`;
  const repoUrl = req.body.repoUrl;

  const test = "https://github.com/AnanthaKrishnanak/React-custom-hooks";

  try {
    await git.clone(test, folderPath);

    const files = getAllFilePaths(folderPath);

    files.forEach(async (file) => {
      uploadFile(file, file);
    });

    res.json({ id: id });
  } catch (error) {
    res.status(500).json({ message: "Faild to deploy" });
  }
});

app.listen(3000);
