var connect = require("connect");
var http    = require("http");
var app     = connect();

function profile(request, response) {
  console.log("User requested profile")
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

app.use("/profile", profile);

http.createServer(app); //listen(???)
console.log("Server is running...");
