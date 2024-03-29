var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/NodeMongo";

// Create database
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// Create collection
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     dbo.createCollection("customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });

// Insert collection customers
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var myobj = [
//       { name: 'John', address: 'Highway 71'},
//       { name: 'Peter', address: 'Lowstreet 4'},
//       { name: 'Amy', address: 'Apple st 652'},
//       { name: 'Hannah', address: 'Mountain 21'},
//       { name: 'Michael', address: 'Valley 345'},
//       { name: 'Sandy', address: 'Ocean blvd 2'},
//       { name: 'Betty', address: 'Green Grass 1'},
//       { name: 'Richard', address: 'Sky st 331'},
//       { name: 'Susan', address: 'One way 98'},
//       { name: 'Vicky', address: 'Yellow Garden 2'},
//       { name: 'Ben', address: 'Park Lane 38'},
//       { name: 'William', address: 'Central st 954'},
//       { name: 'Chuck', address: 'Main Road 989'},
//       { name: 'Viola', address: 'Sideway 1633'}
//     ];
//     dbo.collection("customers").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         console.log(res.insertedIds);
//       db.close();
//     });
//   });

// Insert collection products
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var myobj = [
//       { _id: 154, name: 'Chocolate Heaven'},
//       { _id: 155, name: 'Tasty Lemon'},
//       { _id: 156, name: 'Vanilla Dream'}
//     ];
//     dbo.collection("products").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });
//   });

// Find one
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     dbo.collection("customers").findOne({}, function(err, result) {
//       if (err) throw err;
//       console.log(result.name);
//       db.close();
//     });
//   });

// Find array
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     dbo.collection("customers").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// Find field
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       console.log(result[2]);
//       db.close();
//     });
//   });

// Query
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var query = { address: "Park Lane 38" };
//     dbo.collection("customers").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var query = { address: /^S/ };
//     dbo.collection("customers").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// Sort result ASC = 1 and DESC -1
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var mysort = { name: 1 };
//     dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// Delete document with specific field
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var myquery = { address: 'Mountain 21' };
//     dbo.collection("customers").deleteOne(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       db.close();
//     });
//   });

// Delete many
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var myquery = { address: /^O/ };
//     dbo.collection("customers").deleteMany(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log(obj.result.n + " document(s) deleted");
//       db.close();
//     });
//   });

// Drop collection
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     dbo.collection("customers").drop(function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("Collection deleted");
//       db.close();
//     });
//   });
// Or
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     dbo.dropCollection("customers", function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("Collection deleted");
//       db.close();
//     });
//   });

// Update document
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var myquery = { address: "Valley 345" };
//     var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
//     dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       db.close();
//     });
//   });

// Update many
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var myquery = { address: /^S/ };
//     var newvalues = {$set: {name: "Minnie"} };
//     dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log(res.result.nModified + " document(s) updated");
//       db.close();
//     });
//   });

// Find with limit
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     dbo.collection("customers").find().limit(5).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// Create collection orders
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("NodeMongo");
//     var myobj = [
//         { _id: 1, product_id: 154, status: 1 }
//     ];
//     dbo.collection("orders").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         console.log(res.insertedIds);
//       db.close();
//     });
//   });


// Join
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("NodeMongo");
    dbo.collection('orders').aggregate([
      { $lookup:
         {
           from: 'products',
           localField: 'product_id',
           foreignField: '_id',
           as: 'orderdetails'
         }
       }
      ]).toArray(function(err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res));
      db.close();
    });
  });