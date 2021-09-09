const express = require('express');
let app = express();
app.listen(8080);
// const mongoose = require('mongoose');
// const Author = require('./author');
// const Book = require('./book');


app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static("css"));
app.use(express.static("img"));
app.use(express.urlencoded({ extended: false }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });

app.post("/adddoctor", function (req, res) {
  let bookDetails = req.body;
  db.collection("books").insertOne({
    title: bookDetails.utitle,
    author: bookDetails.uauthor,
    topic: bookDetails.utopic,
    date: bookDetails.udate,
    summary: bookDetails.usummary,
  });
  res.redirect("/doctor"); // redirect the client to list users page
});  


// mongoose.connect('mongodb://localhost:27017/libDB', function (err) {
//     if (err) {
//         console.log('Error in Mongoose connection');
//         throw err;
//     }
//     console.log('Successfully connected');
//     let author1 = new Author({
//         _id: new mongoose.Types.ObjectId(),
//         name: {
//             firstName: 'Tim',
//             lastName: 'John'
//         },
//         age: 80
//     });
//     author1.save(function (err) {
//         if (err) throw err;
//         console.log('Author successfully Added to DB');
//         var book1 = new Book({
//             _id: new mongoose.Types.ObjectId(),
//             title: 'FIT2095 Book ',
//             author: author1._id,
//             isbn: '123456',
//         });
//         book1.save(function (err) {
//             if (err) throw err;
//             console.log('Book1 successfully Added to DB');
//         });
//         var book2 = new Book({
//             _id: new mongoose.Types.ObjectId(),
//             title: 'MEAN Stack with FIT2095',
//             author: author1._id
//         });
//         book2.save(function (err) {
//             if (err) throw err;
//             console.log('Book2 successfully add to DB');
//         });
//     });
// });

