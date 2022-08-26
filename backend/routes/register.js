import express from "express";
import { deleteUser, getUser, postUser, updateUser } from "../controllers/register.js";
const router = express.Router();


router.get('/',getUser)

router.post('/',postUser)

router.put('/:id',updateUser)

router.delete('/:id',deleteUser)

export default router