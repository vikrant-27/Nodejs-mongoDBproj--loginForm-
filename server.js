const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formDB');


const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Create a schema for the form data
const formDataSchema = new mongoose.Schema({
    name: String,
    password: String
});

// Create a model using the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, password } = req.body;

    // Create a new document with the submitted data
    const formData = new FormData({ name, password });

    // Save the document to the database
    formData.save()
        .then(() => {
            res.send('Data saved successfully');
        })
        .catch((error) => {
            console.error(error);
            res.send('Error saving data');
        });
});


// login code below 


// Serve the login page
// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/views/login.html');
// });

// // Handle login form submission
// app.post('/login', (req, res) => {
//     const { name, password } = req.body;

//     // Check if user exists in the database
//     FormData.findOne({ name, password }, (err, user) => {
//         if (err) {
//             console.error(err);
//             res.send('Error checking user data');
//         } else if (user) {
//             res.redirect('/hello');
//         } else {
//             res.send('<script>alert("User doesn\'t exist. Please register first."); window.location="/login";</script>');
//         }
//     });
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// ... (Rest of the code)
