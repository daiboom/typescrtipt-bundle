import express = require('express')

const app: express.Application = express()
const port = 3000

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('start')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
