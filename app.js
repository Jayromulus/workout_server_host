require("dotenv").config();
var express = require("express");
var app = express();
var test = require("./controllers/testcontroller");
var authTest = require("./controllers/authtestcontroller");
var sequelize = require("./db");
var bodyParser = require("body-parser");

var user = require("./controllers/usercontroller");
let log = require('./controllers/logcontroller')

sequelize.sync();
app.use(bodyParser.json());

app.use(require("./middleware/headers"));

// app.get('/', function(request, response){
// response.send("Hello World")
// })

// app.use('/api/test', function(req,res){

// res.send("This is data from the api/test endpoint")
// })

// somethig to change what is in the deplotment

app.use("/api/user", user);
app.use("/test-controller", test);

app.use(require("./middleware/validate-session"));

app.use("/authtest", authTest);
app.use('/api', log)

app.listen(process.env.PORT, function() {
  console.log(`app is listening on ${process.env.PORT} and hello world`);
});
