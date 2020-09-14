const express = require("express");
var morgan = require("morgan");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Person = require("./models/person");
const mongoose = require('mongoose')

app.use(express.static("build"));
app.use(cors());
app.use(express.json());




morgan.token("person", (res) => {
  return JSON.stringify(res.body);
});

app.use(
  morgan("tiny", {
    skip: function (req, res) {
      return req.method === "POST";
    },
  })
);

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :person",
    {
      skip: function (req, res) {
        return req.method !== "POST";
      },
    }
  )
);

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.get("/api/persons", (request, response) => {
  console.log("etsitään");
  Person.find({}).then((item) => {
    response.json(item.map((person) => person.toJSON()));
  });
});

app.get("/api/persons/info", (req, res) => {
  res.send(`<div>Phonebook has ${persons.length} names
                <div>${new Date()}</div>
            </div>`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((item) => item.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});


app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "please enter name and a number",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson.toJSON());
  });

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    }
  
    next(error)
  }

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
