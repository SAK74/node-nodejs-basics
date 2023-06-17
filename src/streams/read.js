import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const read = async () => {
  const stream = createReadStream("src/streams/files/fileToRead.txt", "utf-8");
  stream.pipe(stdout);
};

await read();
