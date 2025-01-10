import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./src/routes/userRoutes.js";

dotenv.config({ path: ".env" });

mongoose.connect(`${process.env.DATABASE_URL}`, { useNewUrlParser: true })

const app = express();
const port = process.env.PORT || 4000;

try{
  mongoose.connection.on('open', () => {
    console.log("Connected to mongodb!");
  })

} catch (e) {
  console.error(`Error connecting to database ${e}`);
}

app.use(bodyParser.json());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
