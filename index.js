import bodyParser from "body-parser";
import mongoose, {connect} from "mongoose";

mongoose.connect('mongodb+srv://develop:v4t5WdkqCxfBNVEK@dev.zl5jzpy.mongodb.net/goz', { useNewUrlParser: true })

const app = express();
const port = 4000;

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
