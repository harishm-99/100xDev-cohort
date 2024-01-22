const jwt = require('jsonwebtoken');

//Duplicate jwt has different secret

const decode = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFyaXNoIiwiZW1haWwiOiJhYmNAZ21haWwuY29tIiwiaWF0IjoxNzA1OTAxMTI3fQ.Ewz1tS-GcxzNEGaz1fV64V4iWJA38u-zUzid7Y0bZ9c", "weryu");
console.log(decode);

//Original jwt has different secret

const decode2 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFyaXNoIiwiZW1haWwiOiJoYXJvaXNoQGdtYWlsLmNvbSIsInBhc3MiOiIxMjQ0NTU2IiwiaWF0IjoxNzA1OTAwOTc0fQ.vKQS6_bjlBr697R42kQNPTlV37I_zlnCW-nMvDcQkwo", "secret1");
console.log(decode2);

//Cannot be verified without original secret