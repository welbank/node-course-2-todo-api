const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
          return console.log('Unable to connect to MongoDB server');
  }
  console.log('Katherine Connected to MongoDB server');


//delete Many
//db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
//console.log(result);
//});

//delete one
//db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
//console.log(result);
//});


//find One and Delete
//db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//console.log(result);
//});

//delete Many with form users with name Alan
//db.collection('Users').deleteMany({name :'Alan'}).then((result) => {
//console.log(result);
//});

//find One and Delete
db.collection('Users').findOneAndDelete({_id: ObjectID ('5bad0183e34599dbb8d0f398')}).then((result) => {
console.log(result);
});


//.find({
  //_id: new ObjectID ('5bad0183e34599dbb8d0f398')
   //}).toArray().then((docs) => {
//db.close();
});
