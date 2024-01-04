// // // const express = require("express");// We will have to bring this library from internet by running command npm install express
// // // const bodyParser = require("body-parser");

// // // const app = express()
// // // const port = 3000;

// // // app.post("/route-handler", function (req, res) {
// // //   // headers, body, query parameters
// // //   // do machine learning module
// // //   res.json({
// // //     name: "Harish",
// // //     age:21
// // //   });
// // // })

// // //fs.readFile("path", "utf-8",())
// // // Similarly,
// // // app.get('/', (req, res) => {
// // //   //db call
// // //   res.send('<b> Hi There</b>')
// // // })


// // const express = require("express");
// // const bodyParser = require("body-parser");

// // const app = express()
// // const port = 3000;

// // app.use(bodyParser.json());
// // app.post('/', (req, res) => {
// //   console.log(req.body);
// //   res.send("<b> Hi There</b>")
// // })

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // });




// const express = require("express");
// // const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;
// // app.use(bodyParser.json());

// // can also use express.json() instead of body-parser.json()
// app.use(express.json());

// app.post('/', (req, res) => {
//   console.log(req.body.message);
//   res.json({
//     output: "2+2=4"
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });



const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req.headers.authorization);// Headers - authorization
  res.status(401).json({// Passing status code
    output: "2+2=4"
  });
  // Cannot to respond to more than once so the below res will not work and show an error
  res.send("Hi there");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
