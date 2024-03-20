const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const x = await fetch(`${process.env.API_ROUTE}/posts`);
        const y = await x.json();
        res.send({
            success: true,
            data: y
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false
        });
    }
});

module.exports = router;