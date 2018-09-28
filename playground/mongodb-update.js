const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
          return console.log('Unable to connect to MongoDB server');
  }
  console.log('Katherine Connected to MongoDB server');


db.collection('Users').findOneAndUpdate({
 _id : new ObjectID ('5bacfbaabfa9602fcc3a2731')
}, {
  $set:{name : 'katherine'},
  $inc:{age : 5}
},{
    returnOrigional: false

}).then(( result) => {
  console.log(result);
});
//db.close();
});
