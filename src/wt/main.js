import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const coresCount = cpus().length;

const performCalculations = async () => {
  const workersResult = [];
  for (let i = 0; i < coresCount; i += 1) {
    const workerProcess = new Promise((res, rej) => {
      const worker = new Worker("./src/wt/worker", { workerData: 10 + i });
      worker.on("message", (mess) => {
        res(mess);
      });
      worker.on("error", (err) => {
        rej(err);
      });
    });
    workersResult.push(workerProcess);
  }
  const results = await Promise.allSettled(workersResult);
  console.log(
    results.map(({ status, value }) => ({
      status: status === "fulfilled" ? "resolved" : "error",
      data: value || null,
    }))
  );
};

await performCalculations();
