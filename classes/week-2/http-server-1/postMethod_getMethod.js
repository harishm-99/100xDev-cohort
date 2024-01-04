// // body is the body part of the backend
// // req.body uses post method

// const express = require("express");
// const bodyParser =   require("body-parser");
// const app = express();
// const port = 3002;

// // app.use(express.json());// It can also be used alternatively
// app.use(bodyParser.json());

// app.post('/', (req, res) => {
//   console.log('Request received for the root path ("/")');
//   console.log(req.body.message);
//   res.json({
//     output: "2+2=4"// This is the output in postman App not in the browser because post method is to be shown in the backend
//   });
// });

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
//     console.log('Server successfully restarted!');
// });




//query is the url part in the browsers where query is in the format www.google.com/?message=123 
//req.query uses get method

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Request received for the root path ("/")');
  console.log(req.query.message);// Logsout in the console 
  res.json({
    output: "2+2=4"// Output in postman as well as browser
  });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log('Server successfully restarted!');
});



