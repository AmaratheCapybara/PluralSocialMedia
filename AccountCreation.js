// AccountCreation.js

const express = require('express');
const { connectDB } = require('./database'); // Adjust the path if necessary
const { ObjectId } = require('mongodb');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// Connect to MongoDB
connectDB();

// Define a route to handle account creation
app.post('/create-account', async (req, res) => {
    const { AccountName, bodyAge, AccountType, introduction } = req.body; // account name is lowercased here. I think it needs to be fixed

    // Validate input
    if (!AccountName || !bodyAge || !AccountType || !introduction) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create user object
    const newUser = {
        AccountName,
        
        bodyAge: parseInt(bodyAge, 10), // Convert to number (can we change to only conver to number if individual ages with the body?)
        AccountType,
        introduction,
        createdAt: new Date(),
    };

    try {
        const db = await connectDB();
        await db.collection('accounts').insertOne(newUser); // Store user in MongoDB
        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//retrieve input from AccountCreation Form
const AccountType = document.querySelector ('AccountType');
const AccountName = document.querySelector ('AccountName');
const BodyAge = document.querySelector ('BodyAge');
const Bio = document.querySelector ('Bio');
const SystemType = document.querySelector ('SystemType')

//declaring Account types
AccountType = ['Singlet', 'System']
SystemType = ['Polyfrag', 'Median']
// storing Account Profile
let AccountProfile= {
    'AccountType': localStorage.setItem('AccountType'),
    'AccountName': localStorage.setItem('AccountName'),
    'BodyAge': localStorage.setItem('BodyAge')
}

//What happens when Account Creation is submitted
document.getElementById("AccountCreation").onsubmit = function(event) {
    event.preventDefault();  // This stops the form from doing the default action (like reloading the page)
    CreateProfile();            // Call the function you want to run
  };

  function myFunction() {
    // This is the function that runs when the form is submitted
    alert('Form has been submitted!');
    if (AccountType = 'Singlet') { 
        window.location.href = "ProfilePage.html";  // redirects to profile game
    }
    if ((AccountType= 'System') && (SystemType = 'Polyfrag')) { // if the system type is Polyfrag and account type is system then The system is directed to create subsystems
        window.location.href = "SubsystemCreation.html"
    }
    if (AccountType = 'System') {
        window.location.href = "HeadmateCreation.html";  // redirects to headmate creation
    }
    }