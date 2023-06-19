import { Transform } from "node:stream";
import { stdin, stdout } from "node:process";

const transform = async () => {
  const reversedTransformStream = new Transform({
    transform(data, encoding, cb) {
      const reversedData = data.toString().split("").reverse().join("");
      cb(null, reversedData);
    },
  });
  stdin.pipe(reversedTransformStream).pipe(stdout);
};

await transform();
