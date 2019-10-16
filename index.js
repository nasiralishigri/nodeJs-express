const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'confusion';

MongoClient.connect(url, (err,client)=>{

assert.equal(err, null);
console.log("Connected Correctly with Server");

const db = client.db(dbname);
const collection = db.collection('dishes');
collection.insertOne({"name": "Uthapizza", "description": "Test"},(err,result)=>{

assert.equal(err,null);
console.log("After Insertion\n"+JSON.stringify(result.ops));
collection.find({}).toArray((err,docs)=>{

    assert.equal(err,null);
    console.log("Found Data \n"+ JSON.stringify(docs));

    db.dropCollection("dishes", (err, result)=>{
        assert.equal(err,null);
        console.log("Client is closed dishes is deleted");
    })

    
})

})

})
