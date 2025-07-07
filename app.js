const express = require("express");
const logger = require("morgan");
const app = express();
const connectToMongoDB = require("./database/connectToMongoDB");
const PORT = 3000;

app.use(express.json());
app.use(logger("dev"));

//Routers
const userRouter = require("./routes/users/userRouter")
app.use("/api/user", userRouter);

const eventRouter = require("./routes/events/eventRouter")
app.use("/api/event", eventRouter)

const bookingRouter = require("./routes/bookings/bookingRouter")
app.use("/api/booking", bookingRouter)

app.listen(PORT, () => {
    console.log(`server is on port ${PORT}...`);
  
    connectToMongoDB();
  });
  