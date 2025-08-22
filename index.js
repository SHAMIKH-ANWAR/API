const express = require('express');
const brodcastRoutes = require('./routes/brodcastRoutes');
const app = express();

app.use(express.json());
app.use("/api/brodcast",brodcastRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});