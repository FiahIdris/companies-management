const router = require("express").Router();
const CountryController = require("../controllers/country/countryController");

router.get("/api/countries", CountryController.getCountries);

module.exports = router;
