const express = require("express");
var morgan = require("morgan");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Person = require("./models/person");
const mongoose = require('mongoose');
const person = require("./models/person");

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
    Person.findById(request.params.id)
      .then(person => {
          response.json(person.toJSON()) 
      })
    })
 


app.delete("/api/persons/:id", (request, response) =>{
  Person.findByIdAndRemove(request.params.id)
  .then(() => {
    response.status(204).end()
  })
})


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
  
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
