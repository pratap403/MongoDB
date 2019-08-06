var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db('mydb');
    dbo.collection("customers").find({},{projection :{address :0}}).toArray(function(err,data){
        if(err) throw err;
        console.log(data);
        db.close();
    });
});