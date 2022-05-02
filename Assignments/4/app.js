const express = require('express')
const app = express()
const port = 3000
const environment = 'development'
const config = require('./knexfile.js')[environment]
const knex = require('knex')(config)

app.use(express.static(__dirname + "/public"))


app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/pages/index.html")
})


app.post('/api/creation', (req, res) => {
  if (req.body.name && req.body.email && req.body.premium_id){
    let request = {name: req.body.name,
                    email: req.body.email,
                    premium_id: req.body.premium_id}
    knex('users').insert(request).returning('id')
        .then(item => {
          knex('users')
          .where('id', item[0]['id'])
          .then(element => {
          return res.json(element)
          })
        })
  }
  else{
    res.send(401, "Missing name, email or premium_id parameter in body. Please use application/x-www-form-urlencoded format")
  }
})

app.post('/api/retrieval', (req, res) => {
  if (req.body.name){
    knex('users').where('name', 'like' , '%' + req.body.name + '%').select()
    .then(list => res.json(list[0]))
  }
  else{
    res.send(401, "Missing name parameter in body please use application/x-www-form-urlencoded format")
  }
  
})

app.post('/api/updating', (res,req) => {
  if (req.body.id && req.body.changes){
    let request = {}
    if (req.body.changes.name){
      request['name'] = req.body.changes.name
    }

    if (req.body.changes.email){
      request['email'] = req.body.changes.email
    }

    if (req.body.changes.premium_id){
      request['premium_id'] = req.body.changes.premium_id
    }
    knex('users').where('id', req.body.id).update(request)
    .then(elem => console.log(elem))
  }
  else{
    req.send(401, "Missing id or changes parameter in body please use application/x-www-form-urlencoded format")
  }
})



app.listen(port, () => {
  console.log(`Copygright : Vincent NOURY, Clément GRAS\nExample app listening on port ${port}`)
})

function some_function(req, res) {
  var letters = "abcdefghijklmnopqrstuvwxyz"
  if (req.params.id < 26){
    res.json({id: letters[req.params.id]})
  }
  else{
    res.json({id: "Your number is too high"})    
  }
}