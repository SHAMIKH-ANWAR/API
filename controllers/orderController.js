const { findNearbyPincodes } = require("indian-pincode-validator");


const BrodcastOrder = (req, res) => {
  try {
    const { orderPincode } = req.body;
    if (!orderPincode) {
      return res.status(400).json({ error: "orderPincode is required" });
    }

    const nearbyPincodes = findNearbyPincodes(orderPincode);
    const phoneNumbers = brodcastOrderService(nearbyPincodes);
  } catch (error) {
    console.error("Error in BrodcastOrder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
