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
            console.log(element)
            return res.json(element[0])
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

app.post('/api/updating', (req,res) => {
  if (req.body.id && req.body.changes){
    let changes = JSON.parse(req.body.changes)
    let request = {}
    if (changes.name){
      request['name'] = changes.name
    }

    if (changes.email){
      request['email'] = changes.email
    }

    if (changes.premium_id){
      request['premium_id'] = changes.premium_id
    }

    knex('users').where('id', req.body.id).update(request)
    .then(elem => {
      if (elem == 1){
        res.json({success: true})
    }
  })}
  else{
    res.send(401, "Missing id or changes parameter in body please use application/x-www-form-urlencoded format\n changes format : {'keyname' : 'value'}")
  }
})

app.post('/api/deleting', (req, res) => {
  if (req.body.id){
    knex('users').where('id', req.body.id).del().then(elem => {if (elem == 1){res.json({success: true})}})
  }
})

app.listen(port, () => {
  console.log(`Copygright : Vincent NOURY, Clément GRAS\nExample app listening on port ${port}`)
})