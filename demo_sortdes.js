var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var mysort = {name : -1};
    dbo.collection("customers").find().sort(mysort).toArray(function (err, data) {
        if(err) throw err;
        console.log(data);
        db.close();
    });
});