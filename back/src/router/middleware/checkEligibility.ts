import HttpStatusCode from '../../constant'
import Jwt from '../../utils/classes/Jwt'
import { removeOccurrence } from '../../utils/functions/utils'

const checkEligibility = (req: any, res: any, next: any) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(HttpStatusCode.UNAUTHORIZED).send('You are not authorized to access this endpoint')
  } else {
    try {
      const token = removeOccurrence(authorization, 'Bearer ')
      Jwt.verifyToken(token)
      next()
    } catch (err) {
      res.status(HttpStatusCode.UNAUTHORIZED).send('You are not authorized to access this endpoint')
    }
  }
}

export default checkEligibility
