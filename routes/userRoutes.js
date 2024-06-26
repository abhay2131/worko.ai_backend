import express from "express";
const router = express.Router();
import authMiddleware from "../middlewares/authMiddlewarees";
import userController from "../controllers/userController";

router.get("/worko/user", authMiddleware, userController.getAllUsers);
router.get("/worko/user/:userId", authMiddleware, userController.getUserById);
router.post("/worko/user", authMiddleware, userController.createUser);
router.put("/worko/user/:userId", authMiddleware, userController.updateUser);
router.patch("/worko/user/:userId", authMiddleware, userController.updateUser);
router.delete(
  "/worko/user/:userId",
  authMiddleware,
  userController.softDeleteUser
);

module.exports = router;
