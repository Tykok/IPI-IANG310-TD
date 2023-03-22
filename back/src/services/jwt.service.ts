import checkIfUserExist from './user.service'

const verifyEligibility = async (user: string, password: string): Promise<boolean> => {
  const userExist = await checkIfUserExist(user, password)
  return userExist
}

export default verifyEligibility
