import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

const write = async () => {
  const stream = createWriteStream("src/streams/files/fileToWrite.txt");
  stdin.pipe(stream);
};

await write();
