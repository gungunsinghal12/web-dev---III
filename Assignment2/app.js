const express = require('express');
const app = express();

const logger = require('./Middleware/logger');
const studentRoutes = require('./Routes/studentRoutes');

app.use(express.json());
app.use(logger);
app.use('/students', studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});