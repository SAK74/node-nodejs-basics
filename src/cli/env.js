import { env } from "node:process";

const parseEnv = () => {
  for (const name in env) {
    console.log(`RSS_${name}=${env[name]}`);
  }
};

parseEnv();
