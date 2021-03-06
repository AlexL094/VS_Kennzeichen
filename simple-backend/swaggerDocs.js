const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Kennzeichen Backend Service",
      description: "Kennzeichen Backend Service",
      license: {
        name: "Von Alexander Lamers, Kilian Sörries und Moritz Stefan Wolf",
      },
    },
    host: "localhost:4000",
    basePath: "/",
    tags: [
      {
        name: "Ortskennung",
        description: "ortskennungen in the database",
      },
      {
        name: "Bewertung",
        description: "bewertungen in the database",
      },
      {
        name: "Tuev",
        description: "Tuevs in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {

      "/ortskennung": {
        get: {
          tags: ["Ortskennung"],
          summary: "Get all Ortskennungen from the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          },
        },
      },
      "/ortskennung/{id}": {
        get: {
          tags: ["Ortskennung"],
          summary: "Get a specific Ortskennung by id",
          parameters: [
            {
              name: "ortskürzel",
              in: "path",
              description: "ortskürzel of the Ortskennung searched for",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
            400: {
              description: "Bad Request something went wrong",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          },
        },
      },
      "/ortskennung/search": {
        get: {
          tags: ["Ortskennung"],
          summary: "Get a specific Ortskennung by ortskürzel",
          parameters: [
            {
              name: "ortskürzel",
              in: "path",
              description: "ortskürzel of the Ortskennung searched for",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          },
        },
      },
      "/ortskennung/add": {
        post: {
          tags: ["Ortskennung"],
          summary: "Add a new Ortskennung",
          parameters: [
            {
              name: "ortskennung",
              in: "body",
              description: "Ortskennung to be added",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          },
        },
      },
      "/ortskennung/put/{id}": {
        put: {
          tags: ["Ortskennung"],
          summary: "Put a specific Ortskennung using the id of the Mongodb",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "id of the specific Ortskennung searched for",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
            {
              name: "ortskennung",
              in: "body",
              description: "the Ortskennung will be updated",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
            400: {
              description: "Bad Request something went wrong",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          },
        },
        
      },
      "/ortskennung/delete/{id}": {
        delete: {
          tags: ["Ortskennung"],
          summary: "Delete Ortskennung by the id from Mongodb",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "id of the Ortskennung ",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/Ortskennung",
              },
            },
          },
        },
      },

      "/bewertung": {
        get: {
          tags: ["Bewertung"],
          summary: "Get all Bewertungen from the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          },
        },
      },
      "/bewertung/{id}": {
        get: {
          tags: ["Bewertung"],
          summary: "Get a specific Bewertung by id",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id of the Bewertung searched for",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          },
        },
      },
      "/bewertung/search": {
        get: {
          tags: ["Bewertung"],
          summary: "Get a specific Bewertung by kennzeichen",
          parameters: [
            {
              name: "kennzeichen",
              in: "path",
              description: "Kennzeichen of the Bewertung searched for",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          },
        },
      },
      "/bewertung/add": {
        post: {
          tags: ["Bewertung"],
          summary: "Add a new Bewertung",
          parameters: [
            {
              name: "bewertung",
              in: "body",
              description: "Bewertung to be added",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          },
        },
      },
      "/bewertung/put/{id}": {
        put: {
          tags: ["Bewertung"],
          summary: "Put a specific Bewertung using the id of the Mongodb",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "id of the specific Bewertung searched for",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
            {
              name: "bewertung",
              in: "body",
              description: "the Bewertung will be updated",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          },
        },
        
      },
      "/bewertung/delete/{id}": {
        delete: {
          tags: ["Bewertung"],
          summary: "Delete Bewertung by the id from Mongodb",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "id of the Bewertung ",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/Bewertung",
              },
            },
          },
        },
      },


      "/tuev": {
        get: {
          tags: ["Tuev"],
          summary: "Get all Tuevs from the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          },
        },
      },
      "/tuev/{id}": {
        get: {
          tags: ["Tuev"],
          summary: "Get a specific Tuev by id",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id of the Tuev searched for",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          },
        },
      },
      "/tuev/search": {
        get: {
          tags: ["Tuev"],
          summary: "Get a specific Tuev by kennzeichen",
          parameters: [
            {
              name: "kennzeichen",
              in: "path",
              description: "kennzeichen of the Tuev searched for",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          },
        },
      },
      "/tuev/add": {
        post: {
          tags: ["Tuev"],
          summary: "Add a new Tuev",
          parameters: [
            {
              name: "tuev",
              in: "body",
              description: "Tuev to be added",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          },
        },
      },
      "/tuev/put/{id}": {
        put: {
          tags: ["Tuev"],
          summary: "Put a specific Tuev using the id of the Mongodb",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "id of the specific Tuev searched for",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
            {
              name: "tuev",
              in: "body",
              description: "the Tuev will be updated",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          },
        },
        
      },
      "/tuev/delete/{id}": {
        delete: {
          tags: ["Tuev"],
          summary: "Delete Tuev by the id from Mongodb",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "id of the Tuev ",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/Tuev",
              },
            },
          },
        },
      },


    },
    definitions: {
      
      Ortskennung: {
        required: ["ortskürzel", "landkreis", "bundesland"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          ortskürzel: {
            type: "string",
          },
          landkreis: {
            type: "string",
          },
          bundesland: {
            type: "string",
          },
        },
      },
      Bewertung: {
        required: ["kennzeichen", "authorVonBewertung"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          kennzeichen: {
            type: "string",
          },
          spurhaltung: {
            type: "number",
          },
          verhalten: {
            type: "number",
          },
          anmerkungen: {
            type: "string",
          },
          authorVonBewertung: {
            type: "string",
          },
        },
      },
      Tuev: {
        required: ["kennzeichen", "ort", "pruefer", "gueltigBis", "letztePrüfung"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          kennzeichen: {
            type: "string",
          },
          ort: {
            type: "string",
          },
          pruefer: {
            type: "string",
          },
          gueltigBis: {
            type: "string",
          },
          letztePrüfung: {
            type: "string",
          },
        },
      },
    },
  };
  
  export default swaggerDocs;