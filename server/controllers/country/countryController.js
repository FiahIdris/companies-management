const axios = require("axios");
const errorFunction = require("../../utils/errorFunction");

class CountryController {
  static async getCountries(req, res, next) {
    try {
      await axios
        .get(
          "https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda"
        )
        .then((response) => {
          const result = response.data.map((obj) => {
            return {
              name: obj.name,
              region: obj.region,
              timezones: obj.timezones,
            };
          });
          res.status(200).send({
            status: 200,
            code: "200",
            data: result,
            message: "Success",
          });
        });
    } catch (err) {
      res.status(500);
      return res.json(errorFunction(true, ` ${err}`));
    }
  }
}

module.exports = CountryController;
