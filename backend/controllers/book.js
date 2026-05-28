const Book = require('../models/schema/Book');

exports.createBooks =  (req, res, next) => {
const book = new Book({
    userId:   req.body.userId,
    title:    req.body.title,
    author:   req.body.author,
    imageUrl: req.body.imageUrl,
    year:     req.body.year,
    genre:    req.body.genre,
    ratings: [{
      userId: req.bod.userId,
      grade:  req.body.grade,
    }],
    averageRating: req.body.averageRating
  });
  book.save()
    .then(() => res.status(201).json({ message: 'Livre enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyBooks =  (req, res, next) =>{
  const book = new Book({
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
  Book.updateOne({ _id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Livre modifié !'}))
    .catch(error => res.status(400).json({error}));
};

exports.deleteBooks =  (req, res, next) => {
     Book.deleteOne({ _id: req.params.id})
      .then(() => res.status(200).json({message: 'Livre supprimé !'}))
      .catch(error => res.status(400).json({error}));
};

exports.getOneBooks = (req, res, next) =>{
  Book.findOne({_id: req.params.id })
    .then(book => res.status(200).json(book))
    .catch(error => res.status(404).json({error}));
};

exports.getAllBooks =  (req, res, next) => {
  Book.find()
  .then(books => res.status(200).json(books))
  .catch(error => res.status(400).json({error}));
};