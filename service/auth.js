const jwt = require('jsonwebtoken')
const Users = require('../repository/users')
const SECRET_KEY = process.env.JWT_SECRET_KEY

class AuthService {
  async isUserExist(email) {
    const user = await Users.findByEmail(email)
    return !!user
  }

  async create(body) {
    const { id, name, email, role, subscription } = await Users.create(body)
    return {
      id,
      name,
      email,
      role,
      subscription,
    }
  }

  async getUser(email, password) {
    const user = await Users.findByEmail(email)
    const isValidPassword = await user?.isValidPassword(password)
    if (!isValidPassword) {
      return null
    }
    return user
  }

  getToken(user) {
    const { id } = user
    const payload = { id }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '8h' })
    return token
  }

  async setToken(id, token) {
    await Users.updateToken(id, token)
  }

  async setSubscription(id, subscription) {
    return await Users.updateSubscription(id, subscription)
  }
}

module.exports = AuthService
