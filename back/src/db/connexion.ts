import { Sequelize } from 'sequelize'

// Specify to TypeScript compiler the variable will be not undefined
const DB_NAME = process.env.DB_NAME!
const DB_PASSWORD = process.env.DB_PASSWORD!
const DB_USER = process.env.DB_USER!
const DB_HOST = process.env.DB_HOST!
const DB_PORT = process.env.DB_PORT!
const NODE_ENV = process.env.NODE_ENV!

const connect = (): Sequelize => {
  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: 'postgres',
    dialectOptions: {
      useUTC: true
    },
    // eslint-disable-next-line no-console
    logging: (msg) => (NODE_ENV === 'DEV' ? console.debug(msg) : false)
  })
  // Check connexion
  sequelize
    .authenticate()
    .then(() => {
      console.log(`Database ${DB_NAME} is now up`)
    })
    .catch((err) => {
      console.log(err)
      console.error(`An error occured when try to connect to ${DB_NAME}`)
    })

  return sequelize
}

const sequelizeConnection = connect()

export default sequelizeConnection
