const router = require("express").Router();
const companyRouter = require("./companyRouter");
const employeeRouter = require("./employeeRouter");
const countryRouter = require("./countryRouter");

router.use(employeeRouter);
router.use(companyRouter);
router.use(countryRouter);

module.exports = router;
