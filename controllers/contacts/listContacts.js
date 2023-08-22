const { Contact } = require('../../models/contact');

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = false } = req.query;
  // не зрозуміла, як зробити так, щоб при запиті на /contacts показувались всі контакти (і true, і false)
  const skip = (page - 1) * limit;
  const result = await Contact.find(
    { owner, favorite },
    '-createdAt -updatedAt',
    {
      skip,
      limit,
    }
  ).populate('owner', 'email');
  res.json(result);
};

module.exports = listContacts;
