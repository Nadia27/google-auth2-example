const shell = require("shelljs");
const fs = require("fs");

const deleteEnvExampleFile = () => {
  fs.unlink("./.env-example", err => {
    if (err) {
      console.log("Error: ", err);
    }
    shell.exec("rm -rf ./.git");
    console.log("Your app should be starting shortly!");
  });
};

const writeEnviromentVariables = envs => {
  fs.writeFile(".env", envs, (err, success) => {
    if (err) {
      console.log("Error: ", err);
    }

    deleteEnvExampleFile();
  });
};

const readEnvExampleFile = () => {
  fs.readFile("./.env-example", "utf-8", (err, envs) => {
    if (err) {
      console.log("Error: ", err);
    }
    console.log(envs);
    writeEnviromentVariables(envs);
  });
};

readEnvExampleFile();
