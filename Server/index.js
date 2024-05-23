const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());


const ColoshopSchema = new Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  imageUrl: { type: String, require: true },
});

const ColoshopModel = mongoose.model("Coloshop", ColoshopSchema);

app.get("/api/product", async (req, res) => {
  const coloshop = await ColoshopModel.find({});
  try {
    if (coloshop) {
      res.status(200).send({ message: "data succes", data: coloshop });
    } else {
      res.status(204).send({ message: "data is empty", data: null });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const coloshop = await ColoshopModel.findById({ id });
    if (coloshop) {
      res.status(200).send({ message: " succes", data: coloshop });
    } else {
      res.status(204).send({ message: "data note found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const coloshopDeleted = await ColoshopModel.findByIdAndDelete({ id });
    if (coloshopDeleted) {
      res.status(200).send({ message: "delete succes", data: coloshopDeleted });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/api/product", async (req, res) => {
  try {
    const newColoshop = new ColoshopModel({ ...req.body });
    await newColoshop.save();
    res.status(201).send({ message: "create success", data: newColoshop });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

const DB_URL =
  "mongodb+srv://rafael052003:rafael0505@cluster0.vk1zm97.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link:http://localhost:${port}`);
  });
});
