const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')

app.get('/', (req,res) =>{
    queries.listAllItems().then((data) =>{
        res.json({data});
    })
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})