const express = require("express");
const db = require("./db/db");

// create/sell a ticket
// console.log("return a ticket", db.createTicket("Mahmud", 20));
db.createTicket("Mahmud", 20);

// create multiple tickets
console.log("create multiple tickets", db.batchCreateTickets("siam", 30, 5));

// get all tickets
console.log("get all tickets", db.getAllTickets());

// draw the raffle
console.log("winners", db.draw(2));

const app = express();

const PORT = process.env.port || 8000;

app.listen(PORT, () => {
  console.log(`Raffle draw is running at the port ${PORT} `);
});
