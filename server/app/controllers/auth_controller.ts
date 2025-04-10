// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'

export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return response.status(200).json({ token })
  }

  async register({ request, response }: HttpContext) {
    const { email, password, fullName } = await request.validateUsing(registerValidator)
    const user = await User.create({ email, password, fullName })
    const token = await User.accessTokens.create(user)

    return response.status(201).json({ token })
  }
}
