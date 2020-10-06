var express = require("express");
const { burger } = require("../models/burger")

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        const unDevoured = data.filter((item, index)=>item.devoured === 0)
        const devoured = data.filter((item, index)=>item.devoured === 1)

        var hbsObject = {
            unDevoured, 
            devoured
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/burger", function (req, res) {
    //   console.log(req.body.burger);
    const { burgerName, devoured } = req.body;
    burger.create([
        "burger_name", "devoured"
    ], [
        burgerName, devoured
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
    //  fieldVal, cb
    const id = req.params.id;
    const devoured = req.body.devoured;
    burger.update(id, devoured, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });


});










module.exports = router;