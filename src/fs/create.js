import { open, write, close } from "node:fs";

const create = async () => {
  open("src/fs/files/fresh.txt", "wx", (err, fd) => {
    if (err?.code === "EEXIST") {
      throw Error("FS operation failed");
    }
    write(fd, "I am fresh and young", (err) => {
      if (!err) {
        console.log("Success!");
        close(fd);
      }
    });
  });
};

await create();
