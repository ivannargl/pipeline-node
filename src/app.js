const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/items', (req, res) => {
  const items = [
    { id: 1, name: 'Laptop', stock: 5, price: 1000 },
    { id: 2, name: 'Mouse', stock: 10, price: 50 }
  ];

  res.status(200).json(items);
});

module.exports = app;
