let students = [];

const getStudents = (req, res) => {
    res.json(students);
};

const addStudent = (req, res) => {
    const { name, age } = req.body;

    const student = {
        id: students.length + 1,
        name,
        age
    };

    students.push(student);

    res.status(201).json(student);
};

module.exports = {
    getStudents,
    addStudent
};