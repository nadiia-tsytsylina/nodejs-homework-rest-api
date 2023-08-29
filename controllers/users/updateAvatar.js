const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');
const { User } = require('../../models/user');

const avatarsDir = path.join(__dirname, '../', '../', 'public', 'avatars');
console.log(avatarsDir);

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  // Jimp.read(tempUpload, (err, avatar) => {
  //   if (err) throw err;
  //   avatar.resize(250, 250);
  //   console.log(avatar);
  // });

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join('avatars', filename);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;
