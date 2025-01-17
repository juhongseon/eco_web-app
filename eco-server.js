const express = require("express")
const app = express()
app.use(express.static('emo'))

const mc = require("mongodb").MongoClient

const mUrl = 'mongodb://localhost:27017'

const crypto = require('crypto')

const shuffleArray = (origin)=>{
    let res = []
    for(let i=origin.length-1; i>=0; i--) {
        let random = Math.floor(Math.random()*i)
        res = res.concat(origin[random])
        origin.splice(random,1)
    }
    return res
}

app.all('/*', function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","X-Requested-With")
    next()
})

app.listen(3355, ()=>{
    console.log("Eco Server Start at Port:3355","http://localhost:3355")
})

// list
app.get('/tag_list',(req,res)=>{
    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')
        db.collection('tag').find({}).sort({'name':1})
            .toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})
app.get('/author_list',(req,res)=>{
    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('emo').find({}).sort({author:1})
            .toArray((err,docs)=>{
                var docs = docs.map((m)=>{return{name:m.author}})
                res.json(docs)
                client.close()
            })
    })
})
app.get('/title_list',(req,res)=>{
    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('emo').find({})
            .toArray((err,docs)=>{
                res.json(docs.map((m)=>{return {name:m.title}}))
                client.close()
            })
    })
})
app.get('/home',(req,res)=>{
    var filter1 = req.query.filter1  // title,tag,author
    var filter2 = req.query.filter2  // favorite,recent
    var keyword = req.query.keyword
    var page = req.query.page*1

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('emo').find({})
            .toArray((err,docs)=>{
                if(!keyword=='') {
                    switch(filter1) {
                        case 'title': {
                            docs = docs.filter(item=>item.title.includes(keyword))
                            break
                        }
                        case 'tag': {
                            docs = docs.filter(item=>item.tags.includes(keyword))
                            break
                        }
                        case 'author': {
                            docs = docs.filter(item=>item.author.includes(keyword))
                            break
                        }
                    }
                }

                if(filter2=='recent') docs = docs.reverse()

                res.json(docs.slice(9*page,9*(page+1)))
                client.close()
            })
    })
})

// search
app.get('/detail_emoticon',(req,res)=>{
    var title = req.query.title

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')
        db.collection('emo')
            .findOne({title:title},(err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})
app.get('/search_by_tag',(req,res)=>{
    var name = req.query.name

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')
        db.collection('emo').find({"tags":name})
            .toArray((err,docs)=>{
                res.json(shuffleArray(docs))
                client.close()
            })
    })
})
app.get('/search_by_category',(req,res)=>{
    var tags = req.query.tags.split(',')

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')
        db.collection('emo').find(tags[0]=='' ? {} : {tags:{$all:tags}})
            .toArray((err,docs)=>{
                res.json(shuffleArray(docs))
                client.close()
            })
    })
})
app.get('/search_by_authorlist',(req,res)=>{
    var authorList = req.query.authors.split(',')

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('emo').find(authorList[0]=='' ? {} : {author:{$in:authorList}})
            .toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})

// user
app.get('/login',(req,res)=>{
    var id = req.query.id
    var pwd = req.query.pwd
    if(id==undefined|pwd==undefined) {
        res.json('error')
        return
    }

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('user').countDocuments({id:id},(err,idCount)=>{
            if(idCount==1) {
                db.collection('user').findOne({id:id},{salt:1,key:1},(err,dbData)=>{
                    crypto.pbkdf2(pwd,dbData.salt,184265,64,'sha512',(err,key)=>{
                        if(key.toString('base64')==dbData.key) {
                            var auth = crypto.createHash('sha256').update(Date.now()+id).digest('base64')

                            db.collection('user').updateOne({id:id},{$set:{auth:auth}},()=>{client.close})
                            res.json(auth)
                        }
                        else {
                            res.json('nopwd')
                            client.close()
                        }
                    })
                })
            } else {
                res.json('noid')
                client.close()
            }
        })
    })
})
app.get('/signin',(req,res)=>{
    var id = req.query.id
    var pwd = req.query.pwd

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('user').countDocuments({id:id},(err,idCount)=>{
            if(idCount==1) {
                res.json('fail')
                client.close()
            } else {
                crypto.randomBytes(64,(err,buf)=>{
                    var salt = buf.toString('base64')

                    crypto.pbkdf2(pwd,salt,184265,64,'sha512',(err,key)=>{
                        db.collection('user').insertOne({id:id,salt:salt,key:key.toString('base64'),auth:'none',favorites:[]},()=>{client.close()})
                        res.json('success')
                    })
                })
            }
        })
    })
})
app.get('/signout',(req,res)=>{
    var id = req.query.id
    var pwd = req.query.pwd
    if(id==undefined|pwd==undefined) {
        res.json('error')
        return
    }

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('user').countDocuments({id:id},(err,idCount)=>{
            if(idCount==1) {
                db.collection('user').findOne({id:id},{salt:1,key:1},(err,dbData)=>{
                    crypto.pbkdf2(pwd,dbData.salt,184265,64,'sha512',(err,key)=>{
                        if(key.toString('base64')==dbData.key) {
                            db.collection('user').deleteOne({id:id})
                            res.json('success')
                        }
                        else {
                            res.json('nopwd')
                            client.close()
                        }
                    })
                })
            } else {
                res.json('noid')
                client.close()
            }
        })
    })
})

// fav
app.get('/add_favorites',(req,res)=>{
    var auth = req.query.auth
    var imgsrc = req.query.imgsrc

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('user').countDocuments({auth:auth},(err,idCount)=>{
            if(idCount==1) {
                db.collection('user').findOne({auth:auth},{favorites:1},(err,dbData)=>{
                    var dbFavorites = dbData.favorites
                    dbFavorites = dbFavorites.filter(str=>str!=imgsrc)
                    var modified = [imgsrc,...dbFavorites]

                    db.collection('user').updateOne({auth:auth},{$set:{favorites:modified}})
                    
                    res.json('success')
                    client.close()
                })
            } else {
                res.json('fail')
                client.close()
            }
        })
    })
})
app.get('/remove_favorites',(req,res)=>{
    var auth = req.query.auth
    var imgsrc = req.query.imgsrc

    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('user').countDocuments({auth:auth},(err,idCount)=>{
            if(idCount==1) {
                db.collection('user').findOne({auth:auth},{favorites:1},(err,dbData)=>{
                    var dbFavorites = dbData.favorites
                    var modified = dbFavorites.filter(str=>str!=imgsrc)

                    db.collection('user').updateOne({auth:auth},{$set:{favorites:modified}})

                    res.json('success')
                    client.close()
                })
            } else {
                res.json('fail')
                client.close()
            }
        })
    })
})

// rcmd
app.get('/rcmd_tags',(req,res)=>{
    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')
        db.collection('tag').find({})
            .toArray((err,docs)=>{
                res.json(shuffleArray(docs).slice(0,5))
                client.close()
            })
    })
})
app.get('/rcmd_emoticons',(req,res)=>{
    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('emo').find({})
            .toArray((err,docs)=>{
                res.json(shuffleArray(docs).slice(0,5))
                client.close()
            })
    })
})
app.get('/rcmd_authors',(req,res)=>{
    mc.connect(mUrl,(err,client)=>{
        var db = client.db('eco')

        db.collection('emo').find({})
            .toArray((err,docs)=>{
                var authors = docs.map(m=>m.author)
                res.json(shuffleArray(authors).slice(0,5))
                client.close()
            })
    })
})