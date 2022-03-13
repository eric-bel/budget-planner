const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/authRouter");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", auth);
app.get("/", (req, res) => {
  res.send("Yes");
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://storm:storm123@cluster0.wcsp7.mongodb.net/budget_planner?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
