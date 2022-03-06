const name = "Storm D";

res.setHeader("Content-Type", "application/json");
    // res.setHeader("Content-Type", "text/html");
    // res.write("<h1>Hello world</h1>");
    // res.write("<h2>Storm D</h2>");
    const data = JSON.stringify([
        {name: "John", age: 25},
        {name: "Zelenskiy", age: 38}
    ])
    res.end(data);

module.exports = name;
