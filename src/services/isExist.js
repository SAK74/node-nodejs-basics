import { access } from "node:fs/promises";
import { constants } from "node:fs";

export async function ifExist(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}
