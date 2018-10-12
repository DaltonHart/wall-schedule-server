const 
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Listening to port 5000');
  })