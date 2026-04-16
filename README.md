**Gender Prediction App (Genderize API)**

**Overview**
This Simple-project uses an external Genderize.io API to predict the gender of a name. The project is a Node.js and Express backend project. It also enhances the response with additional metadata such as confidence level, sample size, and processing time.

**Features**
Accepts a name via query parameter

Fetches gender prediction from the Genderize API

Validates input properly

Returns confidence score and metadata

Handles API errors gracefully

CORS enabled for all origins

**Tech Stack**
Node.js, Express.js

**Project Structure**

project/
  index.js                
  Controller/
    genderizeController.js 
  middleware/
    coreMiddleware.js      
  router/
    genderizeRoute.js               
  .env                   
  package.json

**How to Install and Run the Project**

1. Clone the repository
git clone HNG-first-task-API-Integration-Data-Processing-Assessment.git
cd <your-project-folder>
2. Install dependencies
npm install express dotenv
3. Create .env file
 PORT=3000
4. Run the server
node index.js
Output: Returns gender prediction for a given name.

**Query Parameters**
Parameter	Type		  Required	Description
name		  string		Yes		    Name to analyze

Sample Request
GET http://localhost:3000/?name=David

**Example Response**

**Success Response**

{

"status": "success",

"data": {
"name": "David",
"gender": "male",
"probability": 0.99,
"sample\_size": 500,
"is\_confident": true,
"processed\_at": "2026-04-16T12:00:00.000Z"
; }

}

**Error Responses**

Missing name
{

"status": "error",
"message": "Missing or empty name parameter"

}

No prediction available

{

"status": "error",
"message": "No prediction available for the provided name"

}

Upstream API failure

{

"status": "error",
"message": "Upstream service error"

}

**CORS**
CORS API allows requests from all origins:
Access-Control-Allow-Origin: \*

**Middleware**
Custom middleware is used for CORS:
const cors = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '\*');
	next();

};

**Input Validation Rules**
To avoid error:

Name must be provided
Name must not be empty
Name must be a string

**How It Works**

User sends a name via a query parameter
Backend validates input
Server calls Genderize.io API
Response is processed:
gender
probability
sample size
confidence check
The final structured response is returned

Error Handling

400 → Missing or empty name
422 → Invalid data type
502 → External API failure
500 → Internal server error

**Author**
Oleks

**License**
This project is open-source and free to use.

**Deployment**
back4app

**API versioning (/api/v1)**

# gender_prediction_app
