import express from "express"
import ReviewController from "../controllers/ControllerReview.js"
 
const router = express.Router();
 
router.route("/")
.get(ReviewController.getReview)
.post(ReviewController.insertReview)
 
router.route("/:id")
.put(ReviewController.updateReview)
.delete(ReviewController.deleteReview)
 
export default router;