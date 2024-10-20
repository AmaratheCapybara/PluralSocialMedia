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
    const { accountName, bodyAge, accountType, introduction } = req.body;

    // Validate input
    if (!accountName || !bodyAge || !accountType || !introduction) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create user object
    const newUser = {
        accountName,
        bodyAge: parseInt(bodyAge, 10), // Convert to number (can we change to only conver to number if individual ages with the body?)
        accountType,
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

//declaring Account types
AccountType = ['Singlet', 'System']

// storing Account Profile
let AccountProfile= {
    'AccountType': localStorage.setItem('AccountType'
    )
}