const mongoose = require("mongoose");
const { Books } = require("../config/db/conection");
const { BookExist } = require("../lib/utils");
const User = mongoose.model("User");
const allbooks = async (req, res) => {
  try {
    all = await Books.find();
    res.status(200).json({ sucess: true, all });
  } catch (err) {
    res.status(401).json({ sucess: false, err });
  }
};
const postbook = async (req, res) => {
  
  itExist = await BookExist(Books, req);
  if (itExist) {
    try {
      const newBook = new Books({
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
        username:req.body.username
      });
      try {
        book = await newBook.save();
        const updateuser = await User.findByIdAndUpdate(
          { _id: req.body.userid },
          { $push: { listofBooks: book._id } }
        );

        res.status(200).json({ sucess: true, book });
      } catch (err) {
        res.status(401).json({ sucess: false, msg: err });
      }
    } catch (err) {
      res.status(401).json({ sucess: false, msg: err });
    }
  } else {
    res.status(401).json({ sucess: false, msg: "Book title already exist" });
  }
};
const idbook = async (req, res) => {
  
  try {
    const id = await Books.findById(req.params.id);
    if (id) {
      res.json({ sucess: true, id });
    } else {
      res.json({ sucess: false, msg: "Id incorect" });
    }
  } catch (err) {
    res.json({ msg: err });
  }
};

const updatebook = async (req, res) => {
  try {
    await Books.findByIdAndUpdate(
      { _id: req.params.id },
      { content: req.body.content },
      { title: req.body.content }
    );
    const id = await Books.findById(req.params.id);
    if (id) {
      res.json({ sucess: true, id });
    } else {
      res.json({ sucess: false, msg: "Id incorect" });
    }
  } catch (err) {
    res.json({ msg: err });
  }
};

module.exports = {
  allbooks,
  postbook,
  idbook,
  updatebook,
};
