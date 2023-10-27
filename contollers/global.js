const queryDatabase = require("../database/connect");

const region = async (req, res) => {
  try {
    const query = `
        select region,count(*) as regionCount
        from solar
        group by region;
        `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

const categoryWiseResult = async (req, res) => {
  try {
    const { category } = req.params;
    const query = `
          select ${category}, count(*) as categoryCount
          from solar
          group by ${category};
          `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

const categoryWiseNumericResult = async (req, res) => {
  try {
    const { category, numeric } = req.params;
    const query = `
            select ${category}, avg(${numeric}) as average
            from solar
            group by ${category};
            `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

module.exports = { region, categoryWiseResult, categoryWiseNumericResult };
