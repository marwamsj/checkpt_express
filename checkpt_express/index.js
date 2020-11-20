const express = require ('express');
const app = express();


 const WorkTime = (req,res,next) =>{
    
    var time = new Date();
    var hour = time.getHours();
    var day = time.getDay();

    if( day==0 || day==6 || hour<9 || hour>16 )
    {res.send("<h1>Sorry we are not available now. You are welcome from Monday to Friday from 9 a.m. to 5 p.m.</h1>")}
        
    else
    {next();}
 }
 
 app.use (WorkTime);
 app.use(express.static("public"));


 const port = process.env.PORT || 9000;
 app.listen(port, err=>{
    err? console.log(err) : console.log(`the derver is running in ${port}`); 
})
