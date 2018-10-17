# https://github.com/BryanAvery/Node.js_RESTfulAPI.git

An app demonstrating simple API implementation with NodeJs, Express and MongoDb, with the addition of Swagger RESTful API documentation

The companion tutorial on building can be found here <b>How To Build Simple RESTful API With NodeJs, ExpressJs And MongoDb</b> 

The `api` uri preceeds all API endpoints and the following endpoints are currently available
* GET `/api/contacts`
* POST `/api/contacts`
* GET `/api/contacts/:id`
* PUT `/api/contacts/:id`
* PATCH `/api/contacts/:id`
* DELETE `/api/contacts/:id`

To edit the Swagger file type in the terminal window:

swagger project edit

The RESTful API documentation can be found at:

http://localhost:8080/api-docs/