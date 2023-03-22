import * as jwt from 'jsonwebtoken'
import JwtObject from '../../types/jwt'
import { readFile } from '../functions/utils'

const secretKeyPath = './secret.key'

class Jwt {
  private static readonly secret = readFile(secretKeyPath)
  private readonly created: string
  private readonly expiration: string
  private readonly payload: object | string
  readonly jwt: JwtObject

  /**
   * @param {Any} payload Object contains data payload of the token
   * @param {Number} timeExpiration *Optional* = **3600** (1 hour)
   * number of seconds before the token will be expired
   */
  constructor(payload: object | string, timeExpiration = 36000) {
    this.created = new Date().toString()
    this.payload = payload
    const dateOfExpiration = new Date()
    dateOfExpiration.setSeconds(dateOfExpiration.getSeconds() + timeExpiration)
    this.expiration = String(dateOfExpiration.getTime())
    this.jwt = this.getJWT()
  }

  private getJWT(): JwtObject {
    return {
      key: this.sign(),
      created: this.created,
      expiration: this.expiration
    }
  }

  /**
   * This function create the JSON Web Token (String)
   */
  private sign(): string {
    return jwt.sign(this.payload, Jwt.secret, {
      expiresIn: this.expiration
    })
  }

  /**
   * Check if the token are available
   * @throws {TokenExpiredError} Token is not valid
   */
  public static verifyToken(token: string): string | jwt.JwtPayload {
    return jwt.verify(token, this.secret)
  }

  /**
 * This object will have **3 properties**, here is an example :
 ```js
  {
    header: { alg: 'HS256', typ: 'JWT' },
    payload: { id: 1332, update: 13245698736, iat: 1659537319, exp: 1659540919 },
    signature: 'Tmskyec8JxNX9FgP0xyyCJ0X3ptW2hVZy0vSWYQAnWg'
  }
 ```
 */
  private static decode(token: JwtObject): jwt.Jwt | null {
    return jwt.decode(token.key, { complete: true })
  }
}

export default Jwt
