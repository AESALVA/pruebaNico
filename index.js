const express = require('express');
const mongoose = require('mongoose');

let cors = require('cors')




require('dotenv').config();
mongoose.connect(process.env.URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  }).then(()=>{console.log('database connection OK')}).catch((error)=>{console.error(error)});
//instanciar express y configurar el puerto:
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"));
});

//midlewares:
app.use(cors()); //permite conexiones remotas
app.use(express.json()); //permite interpretar formato json
app.use(express.urlencoded({ extends: true })); //permite interpretar formato json

//rutas
const usersRoutes = require('./src/routes/user.routes');
const newsRoutes = require('./src/routes/news.routes')

app.use("/blognews", newsRoutes); // http://localhost:4000/blognews/news
app.use("/blognews/auth", usersRoutes); // http://localhost:4000/blognews/auth/user o http://localhost:4000/blognews/auth/login
