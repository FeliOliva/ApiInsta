const express = require("express");
const morgan = require("morgan");
const test = require("./Routes/test.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(cors());
app.use(test);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
