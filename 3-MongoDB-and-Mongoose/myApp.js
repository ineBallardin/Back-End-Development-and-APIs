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
  },
  favoriteFoods : [String]
})

const Person = mongoose.model("Person", personSchema);

// 03 - Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  const karineBallardin = new Person({
    name: "Karine",
    age: 30,
    favoriteFoods: ["strogonoff", "churrasco"]
  })

  karineBallardin.save((err, data) => {
    if (err) return console.error(err)

    done(null, data)
  })
};

// 04 - Create Many Records with model.create()
const arrayOfPeople = [
  { name: "Jonatha", age: 32, favoriteFoods: ["pizza", "churrasco"] },
  { name: "Moca", age: 10, favoriteFoods: ["sache de frango", "sache de carne", "racao"] },
  { name: "Feijao", age: 9, favoriteFoods: ["racao", "tomate", "dreams"] },
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err)
  
    done(null, people);
  })
};


// 05 - Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {  
  Person.find({name: personName}, (err, matches) => {
    if (err) return console.error(err)
    
    console.log(matches)
    done(null, matches);
  })
};


const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, person) => {
    if (err) return console.error(err)
    
    done(null, person);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err)

    done(null, person)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return console.error(err)
    
    person.favoriteFoods.push(foodToAdd)

    person.save((err, updated) => {
      if (err) return console.error(err)

      done(null, updated)
    })
  })
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
