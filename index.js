const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const { boards } = require("./routes/boards");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("data");
});

app.use("/boards", boards);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
