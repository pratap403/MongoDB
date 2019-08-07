var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db('mydb');
    var myQuery = {address:"Valley 345"};
    var newValues = {$set :{name: "Mickey", address: "Canyon 123"}};
    dbo.collection("customers").updateOne(myQuery,newValues, function (err, res){
    if(err) throw err;
    console.log("1 Document updated");
    db.close(); 
    });
});