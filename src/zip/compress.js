import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { exitCode } from "node:process";

const compress = async () => {
  const sourceStream = createReadStream("src/zip/files/fileToCompress.txt");
  const targetStream = createWriteStream("src/zip/files/archive.gz");
  const gzip = createGzip();
  pipeline(sourceStream, gzip, targetStream, (err) => {
    if (err) {
      console.error("Something is wrong...");
      exitCode = 1;
    }
  });
};

await compress();

// - implement function that compresses file fileToCompress.txt to archive.gz
// using zlib and Streams API
