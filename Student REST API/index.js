const express = require("express")

const PORT = 3000

const app = express();

app.use(express.json());

let students = [];

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    const { name, age } = req.body;

    const student = {
        id: students.length + 1,
        name,
        age
    };

    students.push(student);

    res.status(201).json({
        message: "Student added successfully",
        student
    });
});

app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, age } = req.body;

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = name;
    student.age = age;

    res.json({
        message: "Student updated successfully",
        student
    });
});

app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});