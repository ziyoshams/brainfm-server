const router = require("express").Router();
const data = require("../data/index");

router.get("/", (req, res) => {
  res.send(data);
});

router.post("/", (req, res) => {
  console.log("params", req.params);
  console.log("body", req.body);
  res.status(200).send();
});

module.exports.boards = router;
