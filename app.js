import express from "express"
import routerStudents from "./router/studentsR.js"

const app = express()
const port = 3000
app.use(express.json())


app.use("/students",routerStudents)


app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})