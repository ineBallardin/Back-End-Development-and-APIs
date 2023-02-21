require('dotenv').config();

// 01 - Install and Set Up Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// 02 - Create a Model
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
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
  Person.find({ name: personName }, (err, matches) => {
    if (err) return console.error(err)
    
    console.log(matches)
    done(null, matches);
  })
};

// 06 - Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err)
    
    done(null, person);
  })
};

// 07 - Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err)

    done(null, person)
  })
};

// 08 - Perform Classic Updates by Running Find, Edit, then Save
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

// 09 - Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({ name: personName }, { age: ageToSet },{ new: true }, (err, personUpdated) => {
    if (err) return console.error(err)

    done(null, personUpdated)
  })
};

 // 10 - Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, personRemoved) => {
    if (err) return console.error(err)

    done(null, personRemoved)
  })
};

// 11 - Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (err, removedPerson) => {
    if (err) return console.error(err)

    done(null, removedPerson);
  })
};

// 12 - Chain Search Query Helpers to Narrow Search Results
const queryChain = (done) => {
  const foodToSearch = "burrito";
  const query = Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec((err, matches) => {
    if (err) return console.error(err)

    done(null, matches);
  })
};

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
