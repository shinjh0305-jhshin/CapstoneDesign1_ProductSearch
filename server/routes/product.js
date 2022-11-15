const router = require("express").Router();
const db = require("../tools/db");

router.post("/create", async (req, res) => {
  console.log(req.body);
  const { name, goal, people, price, url, category, portion, unit, ends, createdby, content } = req.body;

  try {
    const [result] = await db.query(
      `INSERT INTO product(name, goal, people, price, url, category, portion, unit, ends, createdby) values ('${name}', ${goal}, ${people}, ${price}, '${url}', ${category}, ${portion}, '${unit}', '${ends}', '${createdby}')`
    );

    const productId = result.insertId;

    //사진 쿼리
    //await db.query()

    await db.query(`INSERT INTO contents(product_id, content) values (${productId}, '${content}')`);

    res.json({
      message: "Success!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});
router.get("/list", async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT product.*, image.type, image.path
            FROM product JOIN image
            ON product.id = image.product_id
            WHERE image.type = 1;`
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product_id = req.params.id;
    const [result] = await db.query(
      `SELECT product.*, contents.content
            FROM product JOIN contents
            ON ${product_id} = product.id
            AND product.id = contents.product_id;`
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

module.exports = router;
