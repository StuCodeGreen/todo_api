var  express = require('express'),
app= express()

app.get("/",function(req,res){
    res.send("")
})


app.listen(3000,function(){
    console.log("Express listening", this.address().port);
})