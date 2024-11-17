const express = require("express")
const app = express()
const port = 3000
const path = require("path")
const userModel = require("./models/user")
const connection = require("./config/connection")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join("public")))
app.set("view engine","ejs")
app.use(function(req,res,next){
    console.log("Middleware Reached")
    next()
})
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.post("/register",async (req,res)=>{
    const {username,email,password}  = req.body
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hash)=>{
            let user = await userModel.create({
                username:username,
                email:email,
                password:hash
            })
        })
    })
    let token = jwt.sign({email},"hello")
    res.cookie("token",token)
    console.log("Data Saved")
    res.render("index")
})
app.get("/logout",(req,res)=>{
    res.cookie("token","")
    res.send("Done")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",async(req,res)=>{
    let user = await userModel.findOne({
        email:req.body.email
    })
   // console.log(user)
   // console.log(req.body.password)
   // console.log(user.password)
   bcrypt.compare(req.body.password,user.password,function(err,result){
    if(result){
        res.send("Successfully Login")
    }
    else{
        console.log("Something went Wrong")
        res.render("register")
    }
   })
})
app.listen(port,()=>{
    console.log(`Server is listening at ${port}`)
})
