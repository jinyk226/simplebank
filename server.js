'use strict'

// const {db} = require('./server/db')
const express = require('express')
const path = require('path')

const app = express()
const PORT = 1337

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, './public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
//   .then(() => {
//     console.log('db synced')
//     app.listen(PORT, () => console.log(`A bit repetitive but it works. Serving on port ${PORT}`))
//   })

app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`)
})
