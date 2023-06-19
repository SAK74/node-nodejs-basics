import { rm } from "node:fs";

const url = "src/fs/files/fileToRemove.txt";

const remove = async (url) => {
  rm(url, (err) => {
    if (err?.code === "ENOENT") {
      throw Error("FS operation failed");
    }
    console.log("Success!");
  });
};

await remove(url);
