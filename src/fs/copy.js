import { cp } from "node:fs";

const copy = async () => {
  cp(
    "src/fs/files",
    "src/fs/files_copy",
    { recursive: true, force: false, errorOnExist: true },
    (err) => {
      if (err?.code === "ENOENT" || err?.code === "ERR_FS_CP_EEXIST") {
        throw Error("FS operation failed");
      }
    }
  );
};

await copy();
