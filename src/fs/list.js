import { readdir } from "node:fs";
import { access } from "node:fs/promises";

const url = "src/fs/files";

const list = async (url) => {
  try {
    await access(url);
    readdir(url, (err, files) => {
      console.log(files);
    });
  } catch (err) {
    throw Error("FS operation failed");
  }
};

await list(url);
