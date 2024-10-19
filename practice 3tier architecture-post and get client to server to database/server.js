const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { toBeRequired } = require("@testing-library/jest-dom/matchers");

let app = express();
app.use(cors());
app.use(express.json());

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: {
    type: Number,
    toBeRequired: true,
  },
  email: String,
  password: String,
  mobileNo: String,
});

let User = new mongoose.model("user", userSchema);

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
      mobileNo: req.body.mobileNo,
    });

    await User.insertMany([newUser]);

    res.json({ Status: "Success", msg: "User created succesfully" });
  } catch (error) {
    res.json({ status: "Failed", msg: "Unable to create user Account", error });
  }
});
app.listen(4678, () => {
  console.log("listen to the port number 4678");
});

let connectToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nagarajukavibhavi:nagarajukavibhavi@cluster0.okjzs.mongodb.net/2407kavi?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connect to MDB succesfully");
  } catch (error) {
    console.log(error);
  }
};

connectToMDB();

