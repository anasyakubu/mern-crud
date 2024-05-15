const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.mongoose.connect(process.env.MONGODB_URL);

// Fetch [All]
app.get("/users", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

// app.get("/getUser/:id", (req, res) => {
//   const id = req.params.id;
//   UserModel.find({ id })
//     .then((users) => res.json(users))
//     .catch((err) => console.log(err));
// });

// Fetch [One]
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findOne({ _id: id }) // Assuming id is the primary key (_id) in your UserModel
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

// Update [PUT]
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

// Delete
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

// Create[POST]
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(9000, () => {
  console.log("server starting");
});
