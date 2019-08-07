var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db('mydb');
    var myQuery = {address: /^S/};
    var newValues = {$set :{name: 'Micky'}};
    dbo.collection("customers").updateMany(myQuery, newValues, function(err, upRes) {
        if(err) throw err;
        console.log(upRes.result.nModified + "documents modified");
        db.close();
    });
});