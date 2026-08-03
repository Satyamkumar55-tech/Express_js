const express = require("express")

const PORT = 3000

const app = express();

app.use(express.json());

// Import router
const studentRoutes = require("./routes/students");

// Use router
app.use("/students", studentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});