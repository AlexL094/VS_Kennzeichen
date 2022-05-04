# Der Kennzeichen API Service 

### Run `npm run d-up` to start server and MongoDB

## API calls


- GET /bewertung
- GET /bewertung/{id}
- GET /bewertung/search?name={name}
- PUT /bewertung/put/{id}
- POST /bewertung/add
- DELETE /bewertung/delete/{id}

- GET /tuev
- GET /tuev/{id}
- GET /tuev/search?name={name}
- PUT /tuev/put/{id}
- POST /tuev/add
- DELETE /tuev/delete/{id}

- GET /ortskennung
- GET /ortskennung/{id}
- GET /ortskennung/search?name={name}
- PUT /ortskennung/put/{id}
- POST /ortskennung/add
- DELETE /ortskennung/delete/{id}

<span style="color:blue"> -> Go to localhost:300/api for documentation </span>


## Files & Folders

#### API

- **index.js**: app entry point
- **./routes**: contains all available routes
- **./controllers**: contains functions for each route as well as validators
- **./models**: contains the data model to be persisted in MongoDB
- **package.json**: contains all app dependencies, as well as scripts and meta information

#### Docker

- **Dockerfile**: Docker Image definition for the backend
- **.dockerignore**: Files to be ignored by docker

#### Swagger

- **swaggerDocs.js** contains OpenAPI specification

## Docs for further reading

- **Express.js**: https://expressjs.com
- **Express validators**: https://express-validator.github.io/docs/custom-error-messages.html
