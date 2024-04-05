const router = express.Router()
const knex = require('knex')(require('../knexfile'));


router.get("/", async (req, res) => {
    try {
        const data = await knex('orders');
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error retrieving Orders: ${error}`);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await knex('orders')
            .where("order_id", orderId)
            .first()

        if (order) {
            res.status(200).json(order);
        } else {
            res
                .status(404)
                .json({ error: `No such order with ID ${orderId} exists.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error retrieving order: ${error}`);
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const orderId = req.params.id;
        await knex("orders").update(req.body)
            .where("order_id", orderId)

        const updatedOrder = await knex("orders")
            .where("order_id", orderId)
            .first()

        res.json(updatedOrder)
    } catch (error) {
        res.status(500).json({
            message: `Unable to update order data: ${error}`
        })
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const orderId = req.params.id;
        const orderItems = await knex("orders")
            .where("order_id", orderId)
            .delete();

        if (orderItems) {
            return res.sendStatus(200)
        }


        if (orderItems === 0) {
            return res
                .status(404)
                .json({ message: `Order with ID ${orderId} not found` });
        }

    } catch (error) {
        res.status(500).json({
            message: `Unable to delete order: ${error}`
        })
    }
})


module.exports = router