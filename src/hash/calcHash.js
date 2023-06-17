import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  const hash = createHash("SHA256");
  hash.update(await readFile("src/hash/files/fileToCalculateHashFor.txt"));
  console.log(hash.digest("hex"));
};

await calculateHash();
