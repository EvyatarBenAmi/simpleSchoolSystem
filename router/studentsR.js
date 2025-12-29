import express from "express"
import {createStudent} from "../controller/studentsC.js"

const router = express.Router();


router.post("/",createStudent)



export default router