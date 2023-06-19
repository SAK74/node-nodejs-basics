import { fork } from "node:child_process";

const spawnChildProcess = async (...args) => {
  const child = fork("src/cp/files/script", args, {});
  child.on("exit", (code) => {
    console.log("Child process has exited with code ", code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(1, 2, 3);
