# Assignment for backend profile at Rise 11

## Installation
To install all dependencies, run `npm install` on the command line

## Start
Write `npm start` on the command line to start the project. By default it runs on port number 8000.

## API endpoints
There are 2 endpoints (POST method only): 
<br> <b>/auth/signup</b>
<br> <b>/auth/login</b>

So for eg. to make a signup request, send a POST request to http://localhost:8000/auth/signup

The body for <b>/auth/signup</b> accepts the following keys-
<br>firstName (required)
<br>lastName (required)
<br>email (required)
<br>password (required)
<br>username
<br>role (either user or admin)
<br>contactNumber (string)
<br>profilePicture (url string)

<br>
The body for <b>/auth/login</b> accepts the following keys-
<br>email (required)
<br>password (required)

<br> Used MongoDB Atlas for database connection
<br>
<br>
Note: I have also put .env file on github as right now it doesn't contain any sensitive info 
<br> <i>used Node version 18.13.0 </i>
