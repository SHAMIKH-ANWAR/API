# Broadcast Order API

A Node.js API that broadcasts order notifications to users within a 5km radius of a given pincode, similar to Ola/Uber driver notification system.

## Features

- Find users within 5km radius of order pincode
- Send SMS notifications to eligible users
- RESTful API with proper error handling
- Clean modular architecture

## Installation

```bash
npm install
npm start
```

## API Endpoint

### POST /api/brodcast/order

Broadcasts order to users in nearby pincodes.

**Request Body:**
```json
{
  "orderPincode": 560068
}
```

**Response:**
```json
{
  "success": true,
  "orderPincode": 560068,
  "nearbyPincodes": [560068, 560069, 560067, 560070, 560066, ...],
  "usersNotified": 3,
  "phoneNumbers": ["+911111111111", "+944444444444", "+955555555555"]
}
```

## Testing

```bash
curl -X POST http://localhost:3000/api/brodcast/order \
  -H "Content-Type: application/json" \
  -d '{"orderPincode": 560068}'
```

## Architecture

- **Controllers**: Handle HTTP requests and responses
- **Services**: Business logic for finding users and sending SMS
- **Models**: Data schemas (Customer model with mongoose)
- **Routes**: API route definitions

## User Model

```javascript
{
  name: String,
  phoneNumber: String,
  zipCodes: [Number]
}
```

The API finds all users whose `zipCodes` array contains any pincode from the nearby pincodes list and sends them SMS notifications.