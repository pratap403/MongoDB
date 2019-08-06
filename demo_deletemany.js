var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db('mydb');
    var myQuery = {address : /^O/};
    dbo.collection("customers").deleteMany(myQuery, function(err, obj) {
        if(err) throw err;
        console.log(obj.result.n + " Document deleted");
        db.close();
    });
});