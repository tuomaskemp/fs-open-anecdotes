const jsonServer = require('json-server')
const express = require('express')
const app = jsonServer.create()
const path = require('path')

const router = jsonServer.router(path.join(__dirname, 'db.json'))

const PORT = process.env.PORT || 5001

app.use('/api', router)
app.use(express.static('build'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5001')
})