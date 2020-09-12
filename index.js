const express = require("express");
var morgan = require("morgan");
const app = express();
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())
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

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  console.log('poistetaan')
  response.json(persons);
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
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

const generateId = () => {
  const randomId = Math.floor(Math.random() * Math.floor(10000));
  return randomId;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  const sameName = persons.some((item) => item.name === body.name);
  console.log(sameName);

  if (!body.name) {
    return response.status(400).json({
      error: "please enter name and a number",
    });
  }
  if (sameName) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);
  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
