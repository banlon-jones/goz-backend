import bodyParser from "body-parser";
import mongoose, {connect} from "mongoose";
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

mongoose.connect(`${process.env.DATABASE_URL}`, { useNewUrlParser: true })

const app = express();
const port = process.env.PORT || 4000;

try{
  connect.on('open', () => {
    console.log("Connected to mongodb!");
  })

} catch (e) {
  console.error(`Error connecting to database ${e}`);
}

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
