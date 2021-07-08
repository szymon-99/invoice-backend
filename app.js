require('dotenv').config();
require('express-async-errors');

const connectDB = require('./db');
const port = process.env.PORT || 3000;

const { errorHandlerMiddleware, notFoundMiddleware } = require('./middleware');

const router = require('./routes');
const express = require('express');
const app = express();

app.use(express.json());

//routes
app.use('/api/invoices', router);

//middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
