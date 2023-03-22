import UserModel from '../db/models/user.model'

const checkIfUserExist = async (username: string, password: string): Promise<boolean> => {
  const user = await UserModel.findOne({
    attributes: ['id'],
    where: { username, password }
  })

  return user !== null
}

export default checkIfUserExist