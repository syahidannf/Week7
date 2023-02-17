const fs = require("fs");

const logData = "./sample.txt";

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log("Successfully Read!", data);
});

fs.writeFile("log.txt", logData, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log("Succesfully Write", data);
});
