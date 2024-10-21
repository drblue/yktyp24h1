/**
 * Root Router
 */
import express from "express";
import { getLuke, getRoot, postTodos } from "../controllers";

// Create a new Express Router
const router = express.Router();

// Respond to `GET /` requests
router.get("/", getRoot);

// Respond to `GET /luke` requests
router.get("/luke", getLuke);

// Respond to `POST /todos` requests
router.post("/todos", postTodos);

export default router;
