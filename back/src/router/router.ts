import express from 'express'
import footballRouter from './football.router'
import jwtRouter from './jwt.router'
import checkEligibility from './middleware/checkEligibility'

const router = express.Router()

router.use('/api/token', jwtRouter)

// MIDDLEWARE CHECK ELIGIBILITY SECTION
router.use(checkEligibility)
router.use('/api/clubs', footballRouter)

// Default route for all other endpoints
router.all('*', (req, res) => {
  res.status(404).send('This endpoint does not exist')
})

export default router
