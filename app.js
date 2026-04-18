console.log("Starting server...");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const taxRoutes = require('./routes/taxRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', taxRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});