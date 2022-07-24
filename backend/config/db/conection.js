const mongoose = require("mongoose");

const conectionDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASEC, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err);
  }
};

const bookShema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: [true, "must provide a title"],
    maxlength: [20, "title cant be more than 20 characters"],
  },
  content: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
});
const UserShema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "must provide a username"],
    minlength: [3, "username cant be less than 6 charactes"],
  },
  hash: String,
  salt: String,
  listofBooks: [],
});

const User = mongoose.model("User", UserShema);
const Books = mongoose.model("book", bookShema);

module.exports = {
  conectionDB,
  Books,
  User,
};
