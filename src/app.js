const express = require('express')
const app = express()
const port = 8081

const knex = require('knex')(require('../knexfile.js')["development"])
app.use(express.json());


app.get('/', (req, res) =>{
    res.send("App up and running")
})

app.get('/pets', (req, res) => {
    knex('pet')
        .select('*')
        .then(data => {
            var petNames = data.map((pet) => pet.name)
            res.json(petNames)
        })
})

app.listen(port, () =>{
    console.log("server listening on port 8081")
} )