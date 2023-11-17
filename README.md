# Nodejs & mongodb proj--(loginForm)

make sure to keep your file structure as followed -

first create a project folder and then paste the above files as given below :

project-folder 
|-- server.js
|-- views
|   |-- index.html
|-- public
    |-- styles.css

FOR MORE CLARIFICATION (coz i struggled a lot as a beginner XD)

/project-directory 
├── node_modules/         // Created when you run `npm install`
├── public/               // Static files (e.g., CSS, client-side JavaScript)
│   └── style.css         // Example CSS file (optional)
├── views/                // HTML templates
│   └── index.html        // HTML form
├── server.js             // Node.js server code
├── package.json          // Contains project metadata and dependencies
└── package-lock.json     // Automatically generated when you install packages

To set up your project with the required npm packages (Express, Mongoose, and body-parser), you can follow these steps: (i'm using VS code terminal , i have also done this in linux terminal so for any queries regarding linux one can contact me on linkedin )

1.Install mongoDB shell as well as compass - follow documentations (https://www.mongodb.com/try/download/shell)
2.npm init -y
3.npm i express
3.npm i mongoose


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Adding some backend to (cv-generator) .
Basically i'm planning to link this login page to my previous js project (cv generator)  , i.e by linking a login form to that page in which when a user enters it's login credentials it gets saved in mongodb on hitting the submit button. //code related to the same can be ignored. 
