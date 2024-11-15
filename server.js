import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let students = [
    {id: 1, name: "Juliet", age: 16},
    {id: 2, name: "Simone", age: 16},
    {id: 3, name: "Isabella", age: 22},
    {id: 4, name: "Rachael", age: 28},
]

app.get('/api/students', (req, res) => {
    res.send(students);
});

app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found.');
    res.send(student);
});

app.post('/api/students', (req, res) => {
    const student = {
        id: students.length+1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(student);
    res.send(student);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));