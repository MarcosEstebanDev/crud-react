import { Router } from "express";

import { getTasks, getTask, deleteTask, upDateTask, createTask } from "../controller/tasks.controller.js";

const router = Router();


router.get('/tasks', getTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks',createTask)

router.put('/tasks/:id',upDateTask)



router.delete('/tasks/:id',deleteTask)



export default router;