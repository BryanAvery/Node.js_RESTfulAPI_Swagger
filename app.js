// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Import routes
let apiRoutes = require("./routers/contactrouter")


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub?useNewUrlParser=true');

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send(`
<div>This is a working RESTful API example</div></br>

<div><a href='http://localhost:8080/api/v0/contacts'>http://localhost:8080/api/v0/contacts</a></div>`));

// Use Api routes in the App
app.use('/api/v0', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RESTfulAPI on port " + port);
});