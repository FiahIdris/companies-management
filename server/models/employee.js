"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Company, {
        foreignKey: "company_id",
        targetKey: "id",
      });
    }
  }
  Employee.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      job_title: {
        type: DataTypes.ENUM("manager", "director", "staff"),
        defaultValue: "staff",
      },
      company_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Employee",
      tableName: "employees",
    }
  );
  return Employee;
};
