

//dummy data for users - as this will be fetched from mongodb in real scenario 
const users = [
  { name: "User A", phoneNumber: "+911111111111", zipCodes: [560067, 560200] },
  { name: "User B", phoneNumber: "+922222222222", zipCodes: [560100] },
  { name: "User C", phoneNumber: "+933333333333", zipCodes: [560300] }
];

const brodcastOrderService = (nearbyPincodes,) =>{
    const eligibleUsers = users.filter(user =>
      user.zipCodes.some(zip => nearbyPincodes.includes(zip))
    );

    
    const phoneNumbers = eligibleUsers.map(u => u.phoneNumber);
}