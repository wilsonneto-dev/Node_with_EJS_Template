const { Router } = require('express');

const router = Router();

router.get(
  '/',
  (req, res) => {
    // res.send('Hello World');
    res.render('index.ejs');
  },
);

module.exports = router;
