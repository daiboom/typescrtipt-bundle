import express from 'express'

const app: express.Application = express()
const port = 3000

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('start')
})

app.get('/hello', (req: express.Request, res: express.Response) => {
  res.send('hello, world!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

export default app
