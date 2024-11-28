//1
import express from "express";
// 4.
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// 2 create router object
const router = express.Router();

//3 routing
// A. REGISTER || METHOD POST
router.post("/register", registerController); // here , after providing api, we use callback function, but as we are using mvc pattern, thus we are making separate files like  registerController

//5 LOGIN || POST  // here we have used roter middleware
router.post("/login", loginController);

//6 create a dummy route to validate authenticate user by using custom middleware
router.get("/test", requireSignIn, isAdmin, testController);

//8 forgot password
router.post("/forgot-password", forgotPasswordController);

//7 protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//9 protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;
