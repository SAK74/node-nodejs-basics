import { readFile } from "node:fs";

const read = async () => {
  readFile("src/fs/files/fileToRead.txt", { encoding: "utf8" }, (err, data) => {
    if (err?.code === "ENOENT") {
      throw Error("FS operation failed");
    }
    console.log(data);
  });
};

await read();
