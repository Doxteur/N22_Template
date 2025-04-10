// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'

/**
 * @summary Authentifie un utilisateur
 * @tag Auth
 * @operationId loginUser
 * @description Authentifie un utilisateur avec son email et mot de passe, retourne un token d'accès
 */
export default class AuthController {
 /**
   * @myCustomFunction
   * @summary Lorem ipsum dolor sit amet
   * @paramPath provider - The login provider to be used - @enum(google, facebook, apple)
   * @responseBody 200 - {"token": "xxxxxxx"}
   * @requestBody {"code": "xxxxxx"}
   * @responseHeader 200 - X-pages - A description of the header - @example(test)
   */
  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return response.status(200).json({ token })
  }

  /**
   * @summary Crée un nouvel utilisateur
   * @tag Auth
   * @operationId registerUser
   * @description Crée un nouvel utilisateur avec email, mot de passe et nom complet
   * @requestBody {"email": {"type": "string", "format": "email"}, "password": {"type": "string", "minLength": 8}, "fullName": {"type": "string", "minLength": 3}}
   * @responseBody 201 - {"token": "string"} - Token d'accès JWT
   * @responseBody 422 - {"errors": [{"message": "string"}]} - Erreurs de validation
   */
  async register({ request, response }: HttpContext) {
    const { email, password, fullName } = await request.validateUsing(registerValidator)
    const user = await User.create({ email, password, fullName })
    const token = await User.accessTokens.create(user)

    return response.status(201).json({ token })
  }
}
