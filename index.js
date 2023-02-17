// Core module
const fs = require("fs");
const payload = `Semangat`;

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log("Data :", data);
});

// membuat file dan isi nya

fs.writeFile("hello.txt", payload, (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log("Data Berhasil Di Buat:");
});
