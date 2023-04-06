var express = require('express');
var router = express.Router();
const fs = require("fs");

// let books = [
//     {"bookId": 1, "bookTitle": "Hej", "author": "Kalle", "pages": 200},
//     {"bookId": 2, "bookTitle": "På", "author": "Pelle", "pages": 200},
//     {"bookId": 3, "bookTitle": "Dig", "author": "Anna", "pages": 200},
//     {"bookId": 4, "bookTitle": "Haha", "author": "Herman", "pages": 200}
// ];

/* GET users listing. */
router.get('/', (req, res) => {

    fs.readFile("./books.json", (err, data) => {
        if (err) console.log("err", err);

        let books = JSON.parse(data);
        
        res.json(books);
    })
});

router.post("/", (req, res) => {

    // HÄMTA
    fs.readFile("./books.json", (err, data) => {
        
        let books = JSON.parse(data);

        // ÄNDRA
            let newBook = req.body;
            newBook.bookId = books.length + 1;
        
            console.log("newbook", newBook);
        
            books.push(newBook);

            // SPARA

            fs.writeFile("./books.json", JSON.stringify(books, null, 2), (err) => {
                if (err) console.log("err", err);
            })
        
            res.json(newBook);
           // books.push();
    })
});

module.exports = router;
