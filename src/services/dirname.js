import path from "node:path";
import { fileURLToPath } from "node:url";

export const dirname = (url) => path.dirname(fileURLToPath(url));
