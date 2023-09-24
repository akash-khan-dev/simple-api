const express = require("express");

const app = express();
app.use(express.json());
app.use(require("./controller/user"));
app.listen(8000, () => {
  console.log("listening to post 8000");
});
