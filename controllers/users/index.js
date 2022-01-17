/* eslint-disable no-unused-vars */
import getStatisticsContacts from '../../repository/getStatisticsContacts'
import { HttpCode } from '../../libs/constants'
import {
  UploadFileService,
  LocalFileStorage,
  CloudFileStorage,
} from '../../service/file-storage'

// LocalStorage - static/local
// CloudStorage - with using cloudinary

const aggregation = async (req, res, next) => {
  const { id } = req.params
  const data = await getStatisticsContacts(id)
  if (data) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data })
  }
  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: 'error', code: HttpCode.NOT_FOUND, message: 'Not found' })
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

// module.exports = { aggregation, uploadAvatar }

export { aggregation, uploadAvatar }
