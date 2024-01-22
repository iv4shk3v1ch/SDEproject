# SDEproject
This is my university project about webservices. I developed a nickname generator with an external API for AI. 

server.js - main file, which is responsible for calling all other modules and creating the server itself

VIEWS:

main.html - main page for inserting data from user
error.html - page of error for any unaccessable URL
nicknames.ejs - page with list of generated nicknames (use ejs engine for render)

CONTROLLERS:

nicknameController.js - controller for data wich came from user's input on main.html

MODELS:

nicknameModel.js - file for sending request and recieving response from API. request - user keywords, response - nicknames in JSON format


API link: https://rapidapi.com/swift-api-swift-api-default/api/gemini-pro-ai
