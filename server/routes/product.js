const router = require('express').Router();
const db = require('../tools/db');

router.post('/create', async (req, res) => {
    console.log(req.body);
    const { name, total, people, price, source, category, portion, unit, ends, createdby } = req.body;

    try {
        const [result] = await db.query(
            `INSERT INTO product(name, total, people, price, source, category, portion, unit, ends, createdby) values ('${name}', ${total}, ${people}, ${price}, '${source}', ${category}, ${portion}, '${unit}', '${ends}', '${createdby}')`
        );

        res.json({
            "message" : "Success!"
        })

    } catch(err) {
        console.error(err);
        res.status(500).json({
            "message" : "something went wrong"
        })
    }
})
router.get('/list', async (req, res) => {
    try {
        const [result] = await db.query(
            `SELECT * FROM product`
        );
        res.json(result)

    } catch(err) {
        console.error(err);
        res.status(500).json({
            "message" : "something went wrong"
        })
    }
})

module.exports = router;