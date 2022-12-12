const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const projects = require('./data/projects.json');

// MiddleWare
app.use(express.json());
app.use(cors());

//API
app.get('/', (req, res) =>{
    res.send('Portfoli Server Is Running');
});

app.get('/projects', (req, res) =>{
    res.send(projects);
});

app.get('/projects/:id', (req, res) =>{
    const id =  req.params.id;
    console.log(id);
    const selectedProject = projects.find(project => project.id === id);
    res.send(selectedProject);
});

app.listen(port, () =>{
    console.log(`Portfolio Server is Running on Port ${port}`);
});

