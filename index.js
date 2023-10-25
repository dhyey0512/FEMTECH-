const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
app.use(require("cors")())
const port = 3000

app.use(express.json())
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})