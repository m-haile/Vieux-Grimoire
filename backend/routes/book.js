const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book');
const auth = require('../middleware/auth');

router.post('/',      auth, bookCtrl.createBooks);
router.put('/:id',    auth, bookCtrl.modifyBooks);
router.delete('/:id', auth, bookCtrl.deleteBooks);
router.get('/:id',    auth, bookCtrl.getOneBooks);
router.get('/',       auth, bookCtrl.getAllBooks);

module.exports = router;