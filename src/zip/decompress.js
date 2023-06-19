import { createUnzip } from "node:zlib";
import { createWriteStream, createReadStream } from "node:fs";
import { pipeline } from "node:stream";
import { exitCode } from "node:process";

const decompress = async () => {
  const compressedStream = createReadStream("src/zip/files/archive.gz");
  const decompressedStream = createWriteStream(
    "src/zip/files/fileToCompress.txt"
  );
  const unzip = createUnzip();
  pipeline(compressedStream, unzip, decompressedStream, (err) => {
    if (err) {
      console.error("Something was wrong...");
      exitCode = 1;
    }
  });
};

await decompress();

// - implement function that decompresses archive.gz back to the fileToCompress.txt
// with same content as before compression using zlib and Streams API
