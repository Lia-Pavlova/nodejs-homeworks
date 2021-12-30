const Contact = require('../model/contact')
const pkg = require('mongoose')
const { Types } = pkg

const getStatisticsContacts = async (id) => {
  const data = await Contact.aggregate([
    { $match: { owner: Types.ObjectId(id) } },
    {
      $group: {
        _id: 'qweqwe',
        totalAge: { $sum: '$age' },
        minAge: { $min: '$age' },
        maxAge: { $max: '$age' },
        avgAge: { $avg: '$age' },
      },
    },
  ])
  return data
}

module.exports = getStatisticsContacts
