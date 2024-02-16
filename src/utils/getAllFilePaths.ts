import fs from "fs";
import path from "path";

export const getAllFilePaths = (folderPath: string) => {
  let response: string[] = [];

  // allFilesAndFolder contains all files and folders names
  const allFilesAndFolders = fs.readdirSync(folderPath);

  // get all file paths
  allFilesAndFolders.forEach((file) => {
    const fullFilePath = path.join(folderPath, file);
    if (fs.statSync(fullFilePath).isDirectory()) {
      response = response.concat(getAllFilePaths(fullFilePath));
    } else {
      response.push(fullFilePath);
    }
  });
  return response;
};
