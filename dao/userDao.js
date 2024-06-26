import User from "../models/user.models";

exports.getAllUsers = async () => {
  return await User.find({ isDeleted: false });
};

exports.getUserById = async (userId) => {
  return await User.findById(userId);
};

exports.createUser = async (userDto) => {
  const user = new User(userDto);
  return await user.save();
};

exports.updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

exports.softDeleteUser = async (userId) => {
  return await User.findByIdAndUpdate(userId, { isDeleted: true });
};
