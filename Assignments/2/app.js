import express from "express"
import * as url from 'url'
const app = express()
const port = 3000

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(__dirname + "/public"))


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/pages/index.html")
})

app.get('/api/:id', (req, res) => some_function(req, res))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
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

export { some_function }