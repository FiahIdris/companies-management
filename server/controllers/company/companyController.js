const { Company } = require("../../models");
const errorFunction = require("../../utils/errorFunction");

class CompanyController {
  static async addCompany(req, res, next) {
    const { company_name, telephone_number, address } = req.body;
    try {
      await Company.create({
        company_name: company_name,
        telephone_number: telephone_number,
        address: address,
      }).then((response) => {
        res.status(201).send({
          status: 201,
          code: "201",
          data: {
            id: response.id,
          },
          message: "Success",
        });
      });
    } catch (err) {
      res.status(500);
      return res.json(
        errorFunction(true, `Error in Company Server : ${err.message}`)
      );
    }
  }
  static async getCompanies(req, res, next) {
    try {
      await Company.findAndCountAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      }).then((response) => {
        res.status(200).send({
          status: 200,
          code: "200",
          data: response,
          message: "Success",
        });
      });
    } catch (err) {
      res.status(500);
      return res.json(
        errorFunction(true, `Error in Company Data : ${err.message}`)
      );
    }
  }
  static async setCompanyActive(req, res, next) {
    const id = parseInt(req.params.id);

    try {
      await Company.update(
        { is_active: true },
        { returning: true, where: { id } }
      ).then((response) => {
        res.status(201).send({
          status: 201,
          code: "201",
          data: {
            id,
            is_active: true,
          },
          message: "Success",
        });
      });
    } catch (err) {
      res.status(500);
      return res.json(
        errorFunction(true, `Error in Company Data : ${err.message}`)
      );
    }
  }
}

module.exports = CompanyController;
