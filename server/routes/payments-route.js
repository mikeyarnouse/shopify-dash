const router = express.Router()
const knex = require('knex')(require('../knexfile'));


router.get("/", async (req, res) => {
    try {
        const data = await knex('payments');
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error Retrieving Payments: ${error}`);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const paymentId = req.params.id;
        const payment = await knex('payment')
            .where("payment_id", paymentId)
            .first()

        if (payment) {
            res.status(200).json(payment);
        } else {
            res
                .status(404)
                .json({ error: `No such payment with ID ${paymentId} exists.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error Retrieving Payment: ${error}`);
    }
});

module.exports = router