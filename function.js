const data = require("./EV_Dataset.json");
const queryDatabase = require("./database/connect");

const addDataToDB = async () => {
  for (const user of data) {
    // Extracting the numerical part from BatteryCapacity and converting it to an integer
    const batteryCapacity = parseInt(user.BatteryCapacity);
    const dailyDrivingDistance = parseInt(user.DailyDrivingDistance);

    const query = `
    INSERT INTO EV (
      "userid",
      "usertype",
      "ev_model",
      "batterycapacity",
      "chargepreference",
      "dailydrivingdistance",
      "preferredchargingtime",
      "paymentmethod",
      "bank",
      "state",
      "city"
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  `;

    await queryDatabase(query, [
      user.UserID,
      user.UserType,
      user.EV_Model,
      batteryCapacity, // Use the extracted integer value
      user.ChargePreference,
      dailyDrivingDistance, // Use the extracted integer value
      user.PreferredChargingTime,
      user.PaymentMethod,
      user.Bank,
      user.State,
      user.City,
    ]);
  }
};

module.exports = addDataToDB;
