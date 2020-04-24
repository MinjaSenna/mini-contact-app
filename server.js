const express = require("express");
const connectDB = require("./config/db"); 
 
const app = express();

// Connect database 
connectDB(); 

// Initialize middleware, now we can access body data 
app.use(express.json({extended: false })); 
 
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API..." })
);
 

// DEFINE ROUTES 
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));



const PORT = process.env.PORT || 4000;
 
app.listen(PORT, () => console.log(`server start on port ${PORT}`));
  