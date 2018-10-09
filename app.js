const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const bodyParser = require('body-parser');
const queries = require('./queries')

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) =>{
    queries.listAllBooks().then((data) =>{
        res.json({data});
    })
})

app.get('/authors', (req, res, next)   =>  {
    queries.listAllAuthors().then((data) => {
        res.json({data}); 
    })
}) 

app.get('/books-authors', (req, res, next)   =>  {
    queries.listAllAuthorsOfBooks().then((data) => {
        res.json({data}); 
    })
}) 

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})