const MIN_AGE = 14
const MAX_AGE = 75

const HttpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
}

const Role = {
  ADMIN: 'administrator',
  USER: 'user',
}

const LIMIT_JSON = 5000

const Subscription = {
  STARTER: 'starter',
  PRO: 'pro',
  BUSINESS: 'business',
}

const CLOUD_FOLDER_AVATARS = 'Avatars'

module.exports = {
  MIN_AGE,
  MAX_AGE,
  HttpCode,
  Role,
  LIMIT_JSON,
  Subscription,
  CLOUD_FOLDER_AVATARS,
}
