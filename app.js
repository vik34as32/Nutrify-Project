 require('dotenv').config()
 const express = require('express')
 const app = express()
 const router = require('./routers/index')
 const Dbcon  = require('./db/db')
 const session = require('express-session')

 const port = process.env.PORT
const sess_LifeTime = 1000*60*60*24;
const sess_name ="sid"
 
 //****************Middleware******************** */
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure:false
    }
}))


//how to use ejs 
//first app.set are define folder name
//second app.set are use how are use module for example ejs

app.set('views','template')
app.set('view engine','ejs')


// const logger = (req,res,next)=>{
//     console.log(`[${new Date}] [${req.method}]  [${req.url}]`)
//     next()  
// }


// app.use(logger)
app.use(express.static('public'))
app.use('/',router)




 app.listen(port, () => console.log(`Server is Running and the port:${port}`))