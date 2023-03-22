import express = require('express')
import HttpStatusCode from '../constant'
import verifyEligibility from '../services/jwt.service'
import Jwt from '../utils/classes/Jwt'

const jwtRouter = express.Router()

jwtRouter.post('/', async (req, res) => {
  if (!req.body.user || !req.body.password) res.status(400).send('Please, send a user and a password')
  const eligibility = await verifyEligibility(req.body.user, req.body.password)
  if (!eligibility) {
    res.status(HttpStatusCode.UNAUTHORIZED).send('You are not authorized')
  } else {
    const jwtObject = new Jwt({ user: req.body.user, password: req.body.password })
    res.status(HttpStatusCode.OK).send(jwtObject.jwt)
  }
})

export default jwtRouter
