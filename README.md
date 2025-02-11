# Recipe App with Authentication and Authorization
This project is a recipe management application that includes user authentication and authorization, allowing users to securely manage recipes and control access based on roles.

# Features

## Authentication

- Token based authentication
- Issue a JWT (JSON Web Token) or Session ID upon login and registration
- Validate user identity on each request to ensure secure access

## Authorization

- Role-based access control (RBAC) to define permissions and assign roles
- User roles include user
- Permissions managed per role to control recipe creation, editing, and deletion


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
- jsonwebtoken: (For generating and validating JWTs)
- bcryptjs: (For password hashing)
- dotenv: (For managing environment variables)

# Prerequisites
- Node.js and npm installed
- MongoDB running locally or accessible via MongoDB Atlas and Mongo Compass
- Postman for testing API endpoints

## Usage
Registration
Users can register by providing their email and password. Logged in users are granted priviledges to perform crud operations on their recipe apps


### Setup Instructions
1. Clone the repository:
    ``` bash
        git clone https://github.com/AlsonAfrica/Authentication-Authorization-Recipe-.git
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
        The API will run at http://localhost:3001 or specified port


5. Register the user using postman:
    ``` bash
        HTTP: POST    
        endpoint: http://localhost:3001/api/v1/user/register
        pass in the object:
        {
            "email":"user123@gmail.com", 
            "password":"User@12345"
        }


6. Login the user using Postman:
    ``` bash
        HTTP: POST   
        endpoint: http://localhost:3001/api/v1/user/login
        pass in the object: {"email":"user123@gmail.com", "password":User@12345"}
        A token will be generated 


7. Use the generated token to perfom crud operations on recipes :
    ``` bash
        On Postman: Navigate to Authorization.
        Navigate to Type dropdown: select Bearer Token
        Copy and Paste the generated token on the Token field




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

## Data Model: The following schema defines the structure for the new User
     ``` bash
         email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Regex to validate password complexity
                return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#^@$!%*?&-]).{8,}$/.test(value);
            },
            message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long."
        },
    },


## API Endpoints

Here is a table for the API for Recipe and User Authetication:

| Method | Endpoint             | Description                                  |
|--------|----------------------|----------------------------------------------|
| POST   | `/recipes`            | Create a new recipe                          |
| GET    | `/recipes`            | Get all recipes with pagination              |
| GET    | `/recipes/:id`        | Get a specific recipe by ID                  |
| PUT    | `/recipes/:id`        | Update a recipe by ID                        |
| DELETE | `/recipes/:id`        | Delete a recipe by ID                        |
|--------|----------------------|-----------------------------------------------|
| POST   | `/user/register`     | Create a new user                             |
| POST   |  `/user/login`       | Login the user                                |
|        |                      |                                               |

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





