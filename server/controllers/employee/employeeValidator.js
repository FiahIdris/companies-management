const joi = require("joi");
const errorFunction = require("../../utils/errorFunction");
const { Employee } = require("../../models");

const validation = joi.object({
  name: joi.string().alphanum().min(2).max(50).required(),
  email: joi.string().min(5).max(255).required(),
  phone_number: joi
    .string()
    .default(null)
    .min(8)
    .max(16)
    .pattern(/[6-9]{1}[0-9]{9}/),
  job_title: joi.string().default("staff"),
  company_id: joi.number().integer().min(1).max(10).required(),
});

const employeeValidation = async (req, res, next) => {
  const employee_data = await Employee.findByPk(req.params.employee_id);
  const payload = {
    name: req.body.name,
    phone_number: req.body.phone_number,
    job_title: req.body.job_title,
    company_id: req.params.company_id,
    email: req.body.email ?? employee_data.email,
  };

  const { error } = validation.validate(payload);
  if (error) {
    res.status(406);
    return res.json(
      errorFunction(true, `Error in Employee Data : ${error.message}`)
    );
  } else {
    next();
  }
};
module.exports = employeeValidation;
