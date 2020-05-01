const express = require("express");

const mongoose = require("mongoose");

const db = require("./models");

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js")); 







app.listen(PORT, function(){
    console.log(`listening on port${PORT}`)
})
