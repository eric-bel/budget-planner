import express from "express";

import users from "./users.js";


const app = express();

const PORT = 3000;

app.listen(PORT, "localhost", (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Test text");
})



app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/:id', function (req, res) {
    res.send('Got a PUT request');
});

app.delete('/:id', function (req, res) {
    res.send('Got a DELETE request');
});


app.use(express.json());

app.use("/users", users);