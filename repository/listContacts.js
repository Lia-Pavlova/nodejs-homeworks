const Contact = require('../model/contact')

const listContacts = async (
  userId,
  { favorite = null, sortBy, sortByDesc, filter, limit = 20, skip = 0 },
) => {
  let sortCriteria = null
  let total = await Contact.find({ owner: userId }).countDocuments()
  let result = Contact.find({ owner: userId }).populate({
    path: 'owner',
    select: 'name email phone age role subscription',
  })
  if (sortBy) {
    sortCriteria = { [`${sortBy}`]: 1 }
  }
  if (sortByDesc) {
    sortCriteria = { [`${sortByDesc}`]: -1 }
  }
  if (filter) {
    result = result.select(filter.split('|').join(' ')) // 'name age'
  }
  if (favorite) {
    result.find({ favorite: `${favorite}` })
    total = await Contact.find({
      owner: userId,
      favorite: `${favorite}`,
    }).countDocuments()
  }
  result = await result
    .skip(Number(skip))
    .limit(Number(limit))
    .sort(sortCriteria)
  return { total, contacts: result }
}

module.exports = listContacts
