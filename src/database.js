import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  }).then(()=>{console.log('database connection OK')}).catch((error)=>{console.error(error)});