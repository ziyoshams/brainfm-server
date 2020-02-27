const router = require("express").Router();
const data = require("../data/index");

router.get("/", (req, res) => {
  res.send(data);
});

router.post("/cards/:id", (req, res) => {
  const { board, ...card } = req.body;

  try {
    const foundCardIndex = data[board].findIndex(elem => elem.id === card.id);
    if (foundCardIndex >= 0) {
      data[board][foundCardIndex] = card;
    }
    res.status(200).send(card);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports.boards = router;
