import express from 'express'
import request from 'supertest'
// import {} from 'supertest'

const app = express()

app.get('/a', function (req, res) {
  res.status(200).send('hello, world!')
})

describe('GET /a', function () {
  it('response a', function (done) {
    return request(app)
      .get('/a')
      .set('Accept', 'html/text')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.text).toBe('hello, world!')
        return done()
      })
  })
})
