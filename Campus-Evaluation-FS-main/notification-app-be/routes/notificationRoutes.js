import express from "express";
import {getNotifications,addNotifications} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/getNotifications/:userId",getNotifications);
router.post("/addNotifications",addNotifications);

export default router;