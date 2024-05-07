const express = require('express')
const bodyparser= require('body-parser')
const app = express()
const port = 3000
 
app.use(bodyparser.json())
function getPage(req,res){
    //res.send(`<head></head><title>hell Html..</title><body><b>Hi there</b></body></html>`)

    //OR

res.sendFile(__dirname+"/index.html")//sending a file instead 
}

//app.post('/whtsdBigSum', handleFirstRequest)
app.get('/',getPage)
function started(){
  console.log('ypp am listening on port ${port}')}
  app.listen(port,started)
