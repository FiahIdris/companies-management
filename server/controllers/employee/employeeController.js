const { Employee, Company } = require("../../models");
const errorFunction = require("../../utils/errorFunction");

class EmployeeController {
  static async getEmployeesByCompanyId(req, res, next) {
    const company_id = parseInt(req.params.id);

    try {
      await Company.findByPk(company_id, {
        include: {
          model: Employee,
          attributes: {
            exclude: ["createdAt", "updatedAt", "email", "company_id"],
          },
        },

        attributes: {
          exclude: ["createdAt", "updatedAt", "telephone_number", "address"],
        },
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
        errorFunction(true, `Error in Employee Server : ${err.message}`)
      );
    }
  }
  static async getEmployeeById(req, res, next) {
    const id = parseInt(req.params.id);

    try {
      await Employee.findByPk(id, {
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "telephone_number",
            "address",
            "company_id",
          ],
        },
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
        errorFunction(true, `Error in Employee Server : ${err.message}`)
      );
    }
  }
  static async addEmployee(req, res, next) {
    const { name, email, phone_number, job_title } = req.body;
    const company_id = req.params.company_id;
    console.log({
      name,
      email,
      phone_number,
      job_title,
      company_id,
    });
    try {
      await Employee.create({
        name,
        email,
        phone_number,
        job_title,
        company_id,
      }).then((response) => {
        res.status(201).send({
          status: 201,
          code: "201",
          data: {
            id: response.id,
            company_id: response.company_id,
          },
          message: "Success",
        });
      });
    } catch (err) {
      res.status(500);
      return res.json(
        errorFunction(true, `Error in Employee Server : ${err.message}`)
      );
    }
  }
  static async updateEmployee(req, res, next) {
    const { company_id, employee_id } = req.params;

    const { name, phone_number, job_title } = req.body;

    try {
      await Employee.update(
        { name, phone_number, job_title },
        { where: { id: parseInt(employee_id) } }
      ).then((response) => {
        res.status(201).send({
          status: 201,
          code: "201",
          data: {
            id: employee_id,
            company_id,
          },
          message: "Success",
        });
      });
    } catch (err) {
      res.status(500);
      return res.json(
        errorFunction(true, `Error in Employee Data : ${err.message}`)
      );
    }
  }

  static async deleteEmployeeById(req, res, next) {
    const id = req.params.id;

    try {
      await Employee.destroy({ where: { id } }).then((response) => {
        res.status(200).send({
          status: 200,
          code: "200",
          message: "Success",
        });
      });
    } catch (err) {
      res.status(500);
      return res.json(
        errorFunction(true, `Error in Employee Data : ${err.message}`)
      );
    }
  }
}

module.exports = EmployeeController;
