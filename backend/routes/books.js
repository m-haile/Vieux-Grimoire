const express = require('express');
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('../middleware/multer-config')

const bookCtrl = require('../controllers/books');

router.post('/',      auth, multer, bookCtrl.createBooks);
router.put('/:id',    auth, bookCtrl.modifyBooks);
router.delete('/:id', auth, bookCtrl.deleteBooks);
router.get('/:id',    auth, bookCtrl.getOneBooks);
router.get('/',       auth, bookCtrl.getAllBooks);

module.exports = router;