/* eslint-disable no-unused-vars */
import getStatisticsContacts from '../../repository/getStatisticsContacts'
import repositoryUsers from '../../repository/users'
import { HttpCode } from '../../libs/constants'
import {
  UploadFileService,
  LocalFileStorage,
  CloudFileStorage,
} from '../../service/file-storage'

// LocalStorage - static/local
// CloudStorage - with using cloudinary

import { EmailService, SenderSendgrid } from '../../service/email'
import { CustomError } from '../../libs/custom-error'

const aggregation = async (req, res, next) => {
  const { id } = req.params
  const data = await getStatisticsContacts(id)
  if (data) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data })
  }
  throw new CustomError(HttpCode.NOT_FOUND, 'Not found')
}

const uploadAvatar = async (req, res, next) => {
  const uploadService = new UploadFileService(
    LocalFileStorage,
    // CloudFileStorage,
    req.file,
    req.user,
  )

  const avatarUrl = await uploadService.updateAvatar()

  res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data: { avatarUrl } })
}

const verifyUser = async (req, res, next) => {
  const verifyToken = req.params.token
  const userFromToken = await repositoryUsers.findByVerifyToken(verifyToken)

  if (userFromToken) {
    await repositoryUsers.updateVerify(userFromToken.id, true)
    return res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      data: { message: 'Success' },
    })
  }
  throw new CustomError(HttpCode.BAD_REQUEST, 'Invalid token')
}

const repeatEmailForVerifyUser = async (req, res, next) => {
  const { email } = req.body
  const user = await repositoryUsers.findByEmail(email)
  if (user) {
    const { email, name, verifyTokenEmail } = user
    const emailService = new EmailService(
      process.env.NODE_ENV,
      new SenderSendgrid(),
    )

    const isSend = await emailService.sendVerifyEmail(
      email,
      name,
      verifyTokenEmail,
    )

    if (isSend) {
      return res.status(HttpCode.OK).json({
        status: 'success',
        code: HttpCode.OK,
        data: { message: 'Success' },
      })
    }
    throw new CustomError(HttpCode.SE, 'Service Unavailable')
  }
  throw new CustomError(HttpCode.NOT_FOUND, 'User with email not found')
}

export { aggregation, uploadAvatar, verifyUser, repeatEmailForVerifyUser }
