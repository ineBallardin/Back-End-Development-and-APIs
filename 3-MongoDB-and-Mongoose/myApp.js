require('dotenv').config();

// 01 - Install and Set Up Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// 02 - Create a Model
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    unique: true
  },
  favoriteFoods : [String]
})

const Person = mongoose.model("Person", personSchema);

// 03 - Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  const karineBallardin = new Person({
    name: "Karine Ballardin",
    age: 30,
    favoriteFoods: ["Strogonoff", "Churrasco", "Hamburger"]
  })

  karineBallardin.save((err, data) => {
    if (err) return console.error(err)

    done(null, data)
  })
};

// 04 - Create Many Records with model.create()
const arrayOfPeople = [
  {
    name: "Jonatha Ballardin",
    age: 32,
    favoriteFoods: ["Pizza", "Hambuerguer", "Churrasco"]
  },
  {
    name: "Moca",
    age: 10,
    favoriteFoods: ["Sache de frango", "Sache de carne", "Racao"]
  },
  {
    name: "Feijao",
    age: 9,
    favoriteFoods: ["Racao", "Tomate", "Dreams"]
  }
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err)
  
    done(null, people);
  })
};


// 05 - Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {  
  Person.find({name: personName}, (err, personFound) => {
    if (err) return console.error(err)

    done(null, personFound);
  })
};


const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
