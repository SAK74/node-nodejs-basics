import { argv } from "node:process";

const parseArgs = () => {
  const expArgs = argv.slice(2);
  let str = "";
  for (let ind = 0; ind < expArgs.length; ind += 2) {
    const value = expArgs[ind].startsWith("-") ? expArgs[ind + 1] : "";
    str += `${expArgs[ind]} ${value} `;
  }
  console.log(str);
};

parseArgs();
