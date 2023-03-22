//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
console.log(date); 
const app = express();

app.set("view engine", "ejs"); // Telling Express to use EJS templeting engine

app.use(bodyParser.urlencoded({ extended: true }));

// Telling Express to use public folder path
app.use(express.static("public"));

// Craeating empty arry to store the items list
const items = ["Buy Food", "Clean car"];
const workItems = ["Hello Work"];

app.get("/", (req, res) => {
   let day = date.getDate(); // Date function is required from the date.js 
    res.render("list", { listTitle: day, newListItems: items });
});

// This will take the list of items and add them to the array of "items" list
app.post("/", (req, res) => {
    //console.log(req.body);
    let item = req.body.newItem;

    if(req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {

        items.push(item);
        console.log(items);
        res.redirect("/");
    }

});

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
    const item = req.body.newItem;
    workItems.push(item);
    console.log(workItems);
    res.redirect("/work");
});

// Listen on the port 3000
app.listen(3000, () => {
    console.log("Server started on port 3000.");
});
