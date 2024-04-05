require("dotenv").config();
const express = require("express");
const cors = require("cors");
const orderRoutes = require('./routes/orders-route');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())




app.use('/api/orders', orderRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
