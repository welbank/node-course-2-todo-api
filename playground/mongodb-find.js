const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
          return console.log('Unable to connect to MongoDB server');
  }
  console.log('Katherine Connected to MongoDB server');

//db.collection('Todos').find({
  //_id: new ObjectID ('5bacf925e34599dbb8d0f05a')
   //}).toArray().then((docs) => {

  //console.log('Todos');
  //console.log(JSON.stringify(docs,undefined,2));

//},(err) => {
//  console.log('Unable to fetch todos');
//});


db.collection('Users').find({ name : 'Alan'}).toArray().then((docs) => {

console.log(JSON.stringify(docs,undefined,2))

},(err) => {
  console.log('Unable to fetch todos');
});

//db.close();
 });
