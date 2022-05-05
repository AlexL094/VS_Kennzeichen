# Der Kennzeichen API Service 

### Run `npm run d-up` to start server and MongoDB

## API calls

_______________________________________________________________________

# Um die Datenbank initial zu befüllen, kann der folgende Befehl ausgeführt werden
- POST /database/add
 
# Um die gesamte Datenbank zu löschen, kann der folgende Befehl ausgeführt werden. 

# !!!!!! Achtung alle Daten aus allen Collections werden unwiderruflich gelöscht !!!!!!
- DELETE /database/delete
# !!!!!! Achtung alle Daten aus allen Collections werden unwiderruflich gelöscht !!!!!!
_______________________________________________________________________


- GET /bewertung
- GET /bewertung/{id}
- GET /bewertung/search?kennzeichen={kennzeichen}
- PUT /bewertung/put/{id}
- POST /bewertung/add
- DELETE /bewertung/delete/{id}

- GET /tuev
- GET /tuev/{id}
- GET /tuev/search?kennzeichen={kennzeichen}
- PUT /tuev/put/{id}
- POST /tuev/add
- DELETE /tuev/delete/{id}

- GET /ortskennung
- GET /ortskennung/{id}
- GET /ortskennung/search?ortskürzel={ortskürzel}
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
