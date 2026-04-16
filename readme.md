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

&#x20; index.js                

&#x20; Controller/

&#x09;genderizeController.js 

&#x20; middleware/

&#x09;coreMiddleware.js      

&#x20; router/

&#x09;genderizeRoute.js               

&#x20; .env                   

&#x20; package.json



**How to Install and Run the Project**



1\. Clone the repository

&#x20;  git clone HNG-first-task-API-Integration-Data-Processing-Assessment.git

&#x20;  cd <your-project-folder>

2\. Install dependencies

&#x20;  npm install express dotenv

3\. Create .env file

&#x20;  PORT=3000

4\. Run the server

&#x20;  node index.js



Output: Returns gender prediction for a given name.





**Query Parameters**



Parameter	Type		Required	Description

name		string		Yes		Name to analyze



Example Request



GET http://localhost:3000/?name=David



**Example Response**



**Success Response**

{

&#x20; "status": "success",

&#x20; "data": {

&#x20;   "name": "David",

&#x20;   "gender": "male",

&#x20;   "probability": 0.99,

&#x20;   "sample\_size": 500,

&#x20;   "is\_confident": true,

&#x20;   "processed\_at": "2026-04-16T12:00:00.000Z"

&#x20; }

}



**Error Responses**



Missing name

{

&#x20; "status": "error",

&#x20; "message": "Missing or empty name parameter"

}

No prediction available

{

&#x20; "status": "error",

&#x20; "message": "No prediction available for the provided name"

}

Upstream API failure

{

&#x20; "status": "error",

&#x20; "message": "Upstream service error"

}



**CORS**



CORS API allows requests from all origins:



Access-Control-Allow-Origin: \*



**Middleware**



Custom middleware is used for CORS:



const cors = (req, res, next) => {

&#x20;   	res.header('Access-Control-Allow-Origin', '\*');

&#x20;   	next();

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
