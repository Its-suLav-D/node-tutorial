const http = require("http");
const PORT = process.env.PORT || 3000;
const app = require("./routes/prove01-route");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    app.home(req, res);
  } else if (url === "/users") {
    app.users(req, res);
  } else if (url === "/create_user") {
    app.create_user(req, res);
  } else {
    res.end("<h1>Page not Found!!</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
