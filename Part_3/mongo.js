require('dotenv').config();
const mongoose = require('mongoose');

if (!process.env.MONGODB_URI) {
  console.error('MongoDB URI not configured in environment variables');
  process.exit(1);
}

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

const name = process.argv[2];
const number = process.argv[3] || '';

if (process.argv.length === 2) {
  // List all persons
  Person.find({})
    .then(persons => {
      console.log('phonebook:');
      persons.forEach(person => console.log(`${person.name} ${person.number}`));
      mongoose.connection.close();
    })
    .catch(err => {
      console.error('Error fetching persons:', err.message);
      mongoose.connection.close();
      process.exit(1);
    });
} else if (name && number) {
  // Add new person
  new Person({ name, number })
    .save()
    .then(() => {
      console.log(`added ${name} number ${number} to phonebook`);
      mongoose.connection.close();
    })
    .catch(err => {
      console.error('Error saving person:', err.message);
      mongoose.connection.close();
      process.exit(1);
    });
} else {
  console.log('Usage:');
  console.log('  To list all: node mongo.js');
  console.log('  To add new: node mongo.js <name> <number>');
  mongoose.connection.close();
}