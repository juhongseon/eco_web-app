const express = require("express")
const app = express()
app.use(express.static('emo'))

const mc = require("mongodb").MongoClient
const ObjectID = require("mongodb").ObjectID

const mUrl = 'mongodb://localhost:27017'

app.all('/*', function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","X-Requested-With")
    next()
})

app.listen(3355, ()=>{
    console.log("Eco Server Start at Port:3355","http://localhost:3355")
})

app.get('/home',(req,res)=>{
    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')
        db.collection('emo').find({})
            .toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})