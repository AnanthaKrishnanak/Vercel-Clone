import { S3 } from "aws-sdk";
import fs from "fs";
import { ACCESS_KEY_ID, ENDPOINT, SECRET_ACESS_KEY } from "./config";

// replace with your own credentials
const s3 = new S3({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACESS_KEY,
  endpoint: ENDPOINT,
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
  const fileContent = fs.readFileSync(localFilePath);
  const response = await s3
    .upload({
      Body: fileContent,
      Bucket: "vercel",
      Key: fileName,
    })
    .promise();

  console.log(response);
};
