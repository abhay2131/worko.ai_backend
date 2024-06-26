import userDao from "../dao/userDao";

exports.getAllUsers = async () => {
  return await userDao.getAllUsers();
};

exports.getUserById = async (userId) => {
  return await userDao.getUserById(userId);
};

exports.createUser = async (userDto) => {
  return await userDao.createUser(userDto);
};

exports.updateUser = async (userId, updateData) => {
  return await userDao.updateUser(userId, updateData);
};

exports.softDeleteUser = async (userId) => {
  return await userDao.softDeleteUser(userId);
};
