const router = require("express").Router();
const CompanyController = require("../controllers/company/companyController");
const companyValidation = require("../controllers/company/companyValidator");

router.post("/api/companies", companyValidation, CompanyController.addCompany);
router.get("/api/companies", CompanyController.getCompanies);
router.put("/api/companies/:id/set_active", CompanyController.setCompanyActive);

module.exports = router;
