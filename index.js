const http = require("http");

const users = [
  { id: 1, name: "Aarav Sharma", email: "aarav@example.com" },
  { id: 2, name: "Priya Verma", email: "priya@example.com" },
  { id: 3, name: "Anil sidhu", email: "anil@example.com" },
  { id: 4, name: "Tamaghna", email: "tamaghna@example.com" }

];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify(users));
});

server.listen(4500, () => {
  console.log("Server running on port 4500");
});