import  Express  from "express";
import { PORT } from './config.js';
import cors from 'cors'

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from './routes/index.routes.js'

import taskRoute from './routes/tasks.routes.js'

const app = Express();
const __dirname = dirname(fileURLToPath(import.meta.url))
    console.log(__dirname)
app.use(cors())
app.use(Express.json())
app.use(indexRoutes)
app.use(taskRoute)
app.use(Express.static(join(__dirname, '../client/dist')))
app.listen(PORT)

console.log(__dirname)
console.log(`Server is running on port ${PORT}`);

