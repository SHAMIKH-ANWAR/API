
const axios = require('axios');

const users = [
  { name: "User A", phoneNumber: "+911111111111", zipCodes: [560067, 560200] },
  { name: "User B", phoneNumber: "+922222222222", zipCodes: [560100] },
  { name: "User C", phoneNumber: "+933333333333", zipCodes: [560300] },
  { name: "User D", phoneNumber: "+944444444444", zipCodes: [560068, 560069] },
  { name: "User E", phoneNumber: "+955555555555", zipCodes: [560070, 560071] }
];

const brodcastOrderService = async (nearbyPincodes) => {
  const eligibleUsers = users.filter(user =>
    user.zipCodes.some(zip => nearbyPincodes.includes(zip))
  );

  const phoneNumbers = eligibleUsers.map(u => u.phoneNumber);
  
  if (phoneNumbers.length === 0) {
    return {
      usersNotified: 0,
      phoneNumbers: [],
      message: "No users found in nearby pincodes"
    };
  }

  const smsResults = await Promise.all(
    phoneNumbers.map(async (phoneNumber) => {
      try {
        const response = await axios.post('https://www.postman.com/gold-escape-191356/ananth-prasath/request/tqb1lzl/send-templates-noheader', {
          phoneNumber: phoneNumber,
          message: "New order available in your area! Check the app for details.",
          templateId: "order_notification"
        });
        return { phoneNumber, success: true, response: response.data };
      } catch (error) {
        console.error(`Failed to send SMS to ${phoneNumber}:`, error.message);
        return { phoneNumber, success: false, error: error.message };
      }
    })
  );

  return {
    usersNotified: smsResults.filter(result => result.success).length,
    phoneNumbers: phoneNumbers,
    smsResults: smsResults
  };
};

module.exports = { brodcastOrderService };