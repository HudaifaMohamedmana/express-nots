const express = require('express')
const app = express()
const PORT = 3000
//-----------------------------------
app.get(`/`,(req,res)=>{
    res.send = 'wolcom home'
})
app.get(`/fruits`,(req,res)=>{
    res.send = 'fruits'
})

app.get(`/vig`,(req,res)=>{
    res.send = 'vig'
})
// app.get(`/home`,(req,res)=>{
//     res = render('home')
// })

//---------------------------------
app.set('view engine','ejs')
//-----------------------------


//==========================-------------------------------------------------------------------===================
app.listen('3000'|| process.env.PORT,()=>{
    console.log('Server is now running 3000')
})



