const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book');

router.post('/',      bookCtrl.createBooks);
router.put('/:id',    bookCtrl.modifyBooks);
router.delete('/:id', bookCtrl.deleteBooks);
router.get('/:id',    bookCtrl.getOneBooks);
router.get('/',       bookCtrl.getAllBooks);

module.exports = router;