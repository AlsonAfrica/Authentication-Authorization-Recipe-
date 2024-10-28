# Recipe App RESTful API
This project implements a RESTful API for a recipe application using Node.js, Express, and MongoDB. The API allows users to create, retrieve, update, and delete recipes, and it handles errors gracefully. It also supports pagination for efficiently handling large datasets.

# Features
- CRUD operations (Create, Read, Update, Delete) for recipe data.
- Data validation using Mongoose schema.
- Pagination for listing large datasets.
- Comprehensive error handling with informative error messages.
- Testing endpoints via Postman 

# Tech Stack
- Node.js
- Express.js (API framework)
- Cors (Cross Origin Sharing)
- MongoDB (Database)
- Mongoose (MongoDB object modeling)
- Postman/Insomnia (For API testing)
- Nodemon

# Prerequisites
- Node.js and npm installed
- MongoDB running locally or accessible via MongoDB Atlas and Mongo Compass
- Postman for testing API endpoints

### Setup Instructions
1. Clone the repository:
    ``` bash
        git clone https://github.com/AlsonAfrica/Recipe-App-Node-Mongo-
        cd Database


2. Install dependencies::
    ``` bash
        npm install



3. Create a .env file: Add the following environment variables for MongoDB connection:
    ``` bash
        PORT=3000
        MONGO_URI=mongodb://localhost:27017/recipeDB



4. Run the application:
    ``` bash
        nodemon server.js
        The API will run at http://localhost:3000 or specified port


## Data Model: The following schema defines the structure for recipes
     ``` bash
         {
        name: { type: String, required: true },
        ingredients: [{ type: String, name: String, required: true }],
        instructions: { type: String, required: true },
        preparationTime: { type: String, required: true },
        servings: { type: String, required: true },
        created_at: { type: Date, default: Date.now },
        category: { type: String, required: true }
        }




## API Endpoints

Here is a table for the API endpoints:

| Method | Endpoint             | Description                                  |
|--------|----------------------|----------------------------------------------|
| POST   | `/recipes`            | Create a new recipe                          |
| GET    | `/recipes`            | Get all recipes with pagination              |
| GET    | `/recipes/:id`        | Get a specific recipe by ID                  |
| PUT    | `/recipes/:id`        | Update a recipe by ID                        |
| DELETE | `/recipes/:id`        | Delete a recipe by ID                        |

## Pagination
- Clients can specify page and pageSize query parameters to paginate through recipes.
- The response will include the total count of items, the current page number, and the page size.

## Error Handling
- The API provides meaningful error messages for invalid requests, such as missing required fields, incorrect data types, or invalid formats.
- Example error response:

   ```bash
    {
    "error": "ValidationError",
    "message": "Name is required"
    }

## Input Validation
Use Postman to test the API endpoints:

1.Create a Recipe:

  Send a POST request to /recipes with the required body.

2.Retrieve All Recipes:

  Send a GET request to /recipes.

3.Retrieve a Specific Recipe:

  Send a GET request to /recipes/:id with the recipe ID.

4.Update a Recipe:

   Send a PUT request to /recipes/:id with the updated data.

5.Delete a Recipe:

Send a DELETE request to /recipes/:id.

## Testing the API
#### Use Postman to test the API endpoints:
1.Create a Recipe:

  - Send a POST request to /recipes with the required body.

2.Retrieve All Recipes:

  - Send a GET request to /recipes.

3.Retrieve a Specific Recipe:

 - Send a GET request to /recipes/:id with the recipe ID.

4.Update a Recipe:

 - Send a PUT request to /recipes/:id with the updated data.

5.Delete a Recipe:

 - Send a DELETE request to /recipes/:id.

## Contact Details
- Email: nhlakaniphoradebe337@gmail.com
- github: https://github.com/AlsonAfrica/Recipe-App-Node-Mongo-





