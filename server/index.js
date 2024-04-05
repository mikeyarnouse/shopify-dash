require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const profileRoute = require("./routes/profile-route");
const orderRoutes = require("./routes/orders-route");
const paymentsRoutes = require("./routes/payments-route")

app.use("/api/profile", profileRoute);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentsRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
