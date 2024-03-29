const solar_panels = require("../datasets/solar_panel");
const inverters = require("../datasets/invertor");
const schemes = require("../datasets/schemes");
const MSEM = require("../datasets/MSEM");

const integrate = (req, res) => {
  const { customer_id, state } = req.body;
  const sanctioned_kw = MSEM.find(
    (msem) => msem.customer_number === customer_id
  ).santioned_kw;
  const combinations = calculateCombinations(sanctioned_kw);
  const stateData = schemes.states[state];
  res.status(200).json({ combinations, stateData });
};
const calculateCombinations = (required_power) => {
  const combinations = [];

  for (const panel of solar_panels) {
    for (const inverter of inverters) {
      const no_panels = Math.ceil(required_power / panel["Watt"]) + 1;
      const total_cost = panel["price"] * no_panels + inverter["price"];
      if (required_power <= inverter["Watt"]) {
        combinations.push({ panel, no_panels, inverter, total_cost });
      }
    }
  }

  combinations.sort((a, b) => a.total_cost - b.total_cost);

  let result = combinations.slice(0, 3);
  return result;
};

module.exports = { integrate };
