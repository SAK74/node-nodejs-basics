import path from "node:path";
import { release, type, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import "./files/c.js";

// import aJson from "./files/a.json" assert { type: "json" };
// import bJson from "./files/b.json" assert { type: "json" };

import { readFile } from "node:fs/promises";
const aJson = JSON.parse(
  await readFile(new URL("./files/a.json", import.meta.url))
);
const bJson = JSON.parse(
  await readFile(new URL("./files/b.json", import.meta.url))
);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = aJson;
} else {
  unknownObject = bJson;
}

import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

// module.exports = {
//   unknownObject,
//   myServer,
// };

export { unknownObject, myServer };
