const express = require('express');
const cors = require('cors');
const productsRoute = require('./routes/products')
const app = express()
app.use(cors())
app.use(express.json())


app.use('/products',productsRoute)

app.use("*", (req, res) => {
  res.status(404).end();
});

app.use((err, req, res, next) => {
  res.status(403).json(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Connection Started on port ${PORT}`);
});