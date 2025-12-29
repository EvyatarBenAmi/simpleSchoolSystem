import pool from "../dbCnfig.js"


const createNewTable = async (nameDataBases, nameTbale) => {
    try {
        await pool.execute(`CREATE DATABASE if not exists ${nameDataBases}`)
        const [res] = await pool.execute(`
            CREATE TABLE if not exists ${nameTbale}(
            id int primary key auto_increment,
            name VARCHAR(100) NOT NULL,
            age INT NOT NULL,
            className VARCHAR(20) NOT NULL)`
        )
    } catch (err) {
        console.error(err)
    }
};
// await createNewTable("school_db","students")

export const createStudentInTable = async (name, age, className) => {
    try {
        const [res] = await pool.execute(`
        INSERT INTO students (name,age,className)
        VALUES (?,?,?)`,
            [name, age, className])
        return res
    } catch (err) {
        console.error(err)
    }
}