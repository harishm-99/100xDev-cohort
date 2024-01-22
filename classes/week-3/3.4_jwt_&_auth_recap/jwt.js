// JSON web tokens are just like cheques.
// They are issued by the backend when we sign in.
// Anyone can create something very similar, but the backend would reject it.
// If we lose the original jwt it would be a problem

// Three Things to keep in mind while creating jwt:-

// 1. Generate(sign)
// 2. Decoding()
// 3. Verifying(verify)

// Decoding - anyone can use the input (can be done by anyone)

// Verification - Only verified by the BE (given the input)

// decode,verify,generate

const jwt = require('jsonwebtoken');

const content = {
    name: "Harish",
    email: "haroish@gmail.com",
    pass:"1244556"
}

const token = jwt.sign(content, "secret1")

console.log(token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFyaXNoIiwiZW1haWwiOiJoYXJvaXNoQGdtYWlsLmNvbSIsInBhc3MiOiIxMjQ0NTU2IiwiaWF0IjoxNzA1OTAwOTc0fQ.vKQS6_bjlBr697R42kQNPTlV37I_zlnCW-nMvDcQkwo

// Duplicate jwt

const content2 = {
    name: "Harish",
    email: "abc@gmail.com",
}

const token2 = jwt.sign(content2, "weryu")
console.log(token2);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFyaXNoIiwiZW1haWwiOiJhYmNAZ21haWwuY29tIiwiaWF0IjoxNzA1OTAxMTI3fQ.Ewz1tS-GcxzNEGaz1fV64V4iWJA38u-zUzid7Y0bZ9c