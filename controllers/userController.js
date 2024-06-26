import userService from "../services/userServices";
import {
  validateUser,
  validateId,
  validateEmailAndZip,
} from "../validators/userValidator";

exports.getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  await validateId(userId);
  const user = await userService.getUserById(userId);
  res.status(200).json(user);
};

exports.createUser = async (req, res) => {
  const userDto = req.body;
  await validateUser(userDto);
  const newUser = await userService.createUser(userDto);
  res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const updateData = req.body;
  await validateId(userId);
  await validateEmailAndZip(updateData);
  const updatedUser = await userService.updateUser(userId, updateData);
  res.status(200).json(updatedUser);
};

exports.softDeleteUser = async (req, res) => {
  const { userId } = req.params;
  await validateId(userId);
  await userService.softDeleteUser(userId);
  res.status(204).send();
};
