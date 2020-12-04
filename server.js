require('dotenv').config()
const express=require('express')
const app=express()
const ejs = require('ejs')
const path=require('path')
const expresslayout = require('express-ejs-layouts')
const { Mongoose } = require('mongoose')
const PORT = process.env.PORT || 3000
const mongoose= require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const falsh = require('express-flash')
const MongoDbStore = require('connect-mongo')(session)


const url = 'mongodb://localhost/pizza';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
const connection = mongoose.connection;
connection.once('open',()=>{
  console.log('connected');

}).catch(err => {
  console.log('failed')
});

 let mongoStore= new MongoDbStore({
  mongooseConnection:connection,
  collection:'sessions'

})

app.use(session({
  secret:process.env.COOKIE_SECRET,
  resave:false,
  store: mongoStore,
  saveUninitialized:false,
  cookie:{maxAge:1000*60*60*24}//24 hours
}))
app.use(flash())
app.use(express.static('public'))
app.use(express.json())


app.use(expresslayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)

 
app.listen (PORT,()=>{
  console.log(`listing on port dfg  ${PORT}`)
})