const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

connectToMongo();

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('The Daily Scoop backend')
})
app.use('/api/blogs', require('./routes/blogs'))

app.listen(port, () => {
  console.log(`The Daily Scoop listening on port ${port}`)
})