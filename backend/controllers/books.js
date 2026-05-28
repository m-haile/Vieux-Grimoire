const Book = require('../models/schema/Books');
const fs   = require('fs');

exports.createBooks =  (req, res, next) => {
    const  bookObeject = JSON.parse(req.body.books);
    delete bookObeject._id;
    delete bookObeject.userId;
    const books = new Books({
       ...bookObeject,
       userId: req.auth.userId,
       imageUrl:`${req,protocol}://${req.get('host')}/images/${req.file.filename}`
    });

    books
    .save()
    .then(() => res.status(201).json({message: 'Livre enregistré !'}))
    .catch(error => res.status(400).json({error}));
};

exports.modifyBooks =  (req, res, next) =>{
  const books = new Book({
    _id: req.params.id,
    userId: req.body.userId,
    title: req.body.title,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
    year: req.body.year,
    genre: req.body.genre,
    ratings: [{
      userId: req.bod.userId,
      grade: req.body.grade,
    }],
    averageRating: req.body.averageRating
  })
  Books.updateOne({ _id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Livre modifié !'}))
    .catch(error => res.status(400).json({error}));
};

exports.deleteBooks =  (req, res, next) => {
     Books.deleteOne({ _id: req.params.id})
      .then(() => res.status(200).json({message: 'Livre supprimé !'}))
      .catch(error => res.status(400).json({error}));
};

exports.getOneBooks = (req, res, next) =>{
  Books.findOne({
    _id: req.params.id })
    .then(books => res.status(200).json(books))
    .catch(error => res.status(404).json({error}));
};

exports.getAllBooks =  (req, res, next) => {
  Books.find()
  .then(books => res.status(200).json(books))
  .catch(error => res.status(400).json({error}));
};