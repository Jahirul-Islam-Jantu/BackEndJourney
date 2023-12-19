const router = require("express").Router();

router.get("/health", (_req, res) => {
    //if any case you don't use any obj use a (_) before the obj name
    res.status(200).json({
      message: "Success",
    });
  });



module.exports = router;
