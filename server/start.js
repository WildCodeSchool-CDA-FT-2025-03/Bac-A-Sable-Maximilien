const path = require("node:path");
const concurrently = require("concurrently");

const { result } = concurrently(
  [
    "npm:watch-*",
    { command: "npx nodemon", name: "server", cwd: "." },
    { command: "npm run dev", name: "client", cwd: "../client" },
  ],
  {
    prefix: "",
    killOthers: ["failure", "success"],
    restartTries: 3,
    cwd: path.resolve(__dirname, "scripts"),
  },
);

// result.then(success, failure);
