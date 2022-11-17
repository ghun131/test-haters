const express = require("express");
const { spawn } = require("child_process");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 33333;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ a: 1 });
});

app.post("/", (req, res) => {
  // const ls = spawn("ls", ["-la"]);
  const e2eTestDir = `${__dirname}/To-do-app-with-React`;

  const side_process = spawn("yarn run cypress open", { shell: true, detached: true, cwd: e2eTestDir});

  side_process.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  side_process.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  side_process.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  side_process.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
  res.json({ b: 123 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
