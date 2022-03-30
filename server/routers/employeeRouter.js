const router = require("express").Router();
const EmployeeController = require("../controllers/employee/employeeController");
const employeeValidation = require("../controllers/employee/employeeValidator");

router.get(
  "/api/companies/:id/employees",
  EmployeeController.getEmployeesByCompanyId
);
router.get("/api/employees/:id", EmployeeController.getEmployeeById);
router.post(
  "/api/companies/:company_id/employees",
  employeeValidation,
  EmployeeController.addEmployee
);
router.put(
  "/api/companies/:company_id/employees/:employee_id",
  employeeValidation,
  EmployeeController.updateEmployee
);
router.delete("/api/employees/:id", EmployeeController.deleteEmployeeById);

module.exports = router;
