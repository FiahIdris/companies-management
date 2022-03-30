const joi = require("joi");
const errorFunction = require("../../utils/errorFunction");

const validation = joi.object({
  company_name: joi.string().alphanum().min(3).max(50).required(),
  telephone_number: joi
    .string()
    .min(8)
    .max(16)
    .pattern(/[6-9]{1}[0-9]{9}/),
  is_active: joi.boolean().default(false),
  address: joi.string().min(10).max(50),
});

const companyValidation = async (req, res, next) => {
  const payload = {
    company_name: req.body.company_name,
    telephone_number: req.body.telephone_number,
    address: req.body.address,
  };

  const { error } = validation.validate(payload);
  if (error) {
    res.status(406);
    return res.json(
      errorFunction(true, `Error in User Data : ${error.message}`)
    );
  } else {
    next();
  }
};
module.exports = companyValidation;
