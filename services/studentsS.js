import { createStudentInTable } from "../DAL/studentsD.js";

export const checkParameters = async(name, age, className) => {
    try {
        if (name && age && className) {
            await createStudentInTable(name, age, className)
        } else { console.log(`Error`) }
    } catch (err) {
        console.log(`Error`,err)
    }
} 