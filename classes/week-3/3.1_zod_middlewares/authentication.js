//Authentication
// Dumb way - Ask the user to send username and password in all requests as headers.

// Better way :-

// 1. Give the user back a token on signup / signin.
// 2. Ask the user to send back the token in all future requests.
// 3. When the user logs out, ask the user to forget the token(or revoke it from the backend).