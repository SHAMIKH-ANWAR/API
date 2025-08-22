const { brodcastOrderService } = require("../service/brodcastOrderService");

const findNearbyPincodes = (pincode, radiusKm = 5) => {
  const basePincode = parseInt(pincode);
  const nearbyPincodes = [basePincode];
  
  for (let i = 1; i <= 10; i++) {
    nearbyPincodes.push(basePincode + i);
    nearbyPincodes.push(basePincode - i);
  }
  
  return nearbyPincodes.filter(p => p > 100000 && p < 999999);
};

const BrodcastOrder = async (req, res) => {
  try {
    const { orderPincode } = req.body;
    if (!orderPincode) {
      return res.status(400).json({ error: "orderPincode is required" });
    }

    const nearbyPincodes = findNearbyPincodes(orderPincode, 5);
    const result = await brodcastOrderService(nearbyPincodes);
    
    res.status(200).json({
      success: true,
      orderPincode,
      nearbyPincodes,
      usersNotified: result.usersNotified,
      phoneNumbers: result.phoneNumbers
    });
  } catch (error) {
    console.error("Error in BrodcastOrder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { BrodcastOrder };
