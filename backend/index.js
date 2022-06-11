const express = require("express");
const app = express();
const port = 4000;

const cors = require("cors");

app.use(cors());
/*app.set('view engine', 'ejs');
app.use("/static", express.static('static'));
app.use("/scripts", express.static('scripts'));

const login = require("./models/login/login-controller");

const profile = require("./models/profile/profile-controller");
const job = require("./models/job-registration/job-controller")
const logout = require("./models/logout/logout-controller")

app.use('/', login);
app.use('/', registration);
app.use('/', profile);
app.use('/', job);
app.use('/', logout);*/

const user = require("./models/user/user-controller");
const page = require("./models/page/page-controller");


app.use('/', user);
app.use('/', page);


app.listen(port,() => {console.log(`Servidor rodando em: http://localhost:${port}`)});