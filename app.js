const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

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