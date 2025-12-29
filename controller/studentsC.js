import {checkParameters} from "../services/studentsS.js"

export const createStudent = (req, res) => {
    try {
        const { name, age, className } = req.body
        checkParameters(name, age, className)
        return res.status(201).send()
    } catch (err) {
    res.send(`Error`, err)
}
};