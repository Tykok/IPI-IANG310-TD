import express = require('express')
import HttpStatusCode from '../constant'
import verifyEligibility from '../services/jwt.service'
import Jwt from '../utils/classes/Jwt'

const jwtRouter = express.Router()

jwtRouter.post('/', async (req, res) => {
  if (!req.body.user || !req.body.password) return res.status(400).json('Please, send a user and a password')
  const eligibility = await verifyEligibility(req.body.user, req.body.password)
  if (!eligibility) {
    return res.status(HttpStatusCode.UNAUTHORIZED).json('You are not authorized')
  } else {
    const jwtObject = new Jwt({ user: req.body.user, password: req.body.password })
    return res.status(HttpStatusCode.OK).json(jwtObject.jwt)
  }
})

export default jwtRouter
