const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

router
  .route("/")
  .get(async (req, res) => {
    try {
      const userProfile = await knex("profile").select("*");
      res.json(userProfile[0]);
    } catch (e) {
      res.status(500).json({
        message: `Unable to retrieve profile data. ${e}`,
      });
    }
  })
  .patch(async (req, res) => {
    try {
      await knex("profile").update(req.body);

      const updatedProfile = await knex("profile").select("*");
      res.json(updatedProfile[0]);
    } catch (e) {
      res.status(500).json({
        message: `Unable to update profile data. ${e}`,
      });
    }
  });

module.exports = router;
