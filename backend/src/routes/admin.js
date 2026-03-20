import express from "express"
import AdminController from "../controllers/ControllerAdmin.js"
 
const router = express.Router();

router.route("/")
.get(AdminController.getAdmins)
.post(AdminController.insertAdmins)

router.route("/:id")
.put(AdminController.updateAdmin)
.delete(AdminController.deleteAdmins)

export default router;