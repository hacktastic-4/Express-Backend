const queryDatabase = require("../database/connect");

const regionWiseResult = async (req, res) => {
  try {
    const { region, category } = req.params;
    const query = `
        select ${category}, count(*) as categoryCount
        from solar
        where region='${region}' group by ${category};
        `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

const regionWiseNumericResult = async (req, res) => {
  try {
    const { region, category, numeric } = req.params;
    const query = `
          select ${category}, avg(${numeric}) as average
          from solar
          where region='${region}' group by ${category};
          `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

module.exports = { regionWiseResult, regionWiseNumericResult };
