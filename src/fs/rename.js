import path from "node:path";
import { rename as fsRename } from "node:fs";
import { ifExist } from "../services/isExist.js";
import { dirname } from "../services/dirname.js";

const __dirname = dirname(import.meta.url);

const pathFileToRename = path.join(__dirname, "./files/wrongFilename.txt");
const pathRenamedFile = path.join(__dirname, "./files/properFilename.md");

const rename = async () => {
  if (!(await ifExist(pathFileToRename)) || (await ifExist(pathRenamedFile))) {
    throw Error("FS operation failed");
  }
  fsRename(pathFileToRename, pathRenamedFile, () => {
    console.log("Success!");
  });
};

await rename();
