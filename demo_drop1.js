var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo  = db.db("mydb");
    dbo.dropCollection("products", function(err, drOk) {
        if(err) throw err;
        if(drOk) console.log('Collection Dropped Successfully');
        db.close();
    });
});