const express = require("express");

const app = express();

const PORT = env.port || 8000;

app.listen(PORT, () => {
  console.log(`Raffle draw is running at the port ${PORT} `)
})

