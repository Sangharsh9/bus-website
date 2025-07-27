const express = require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000; 

// Middleware to parse URL-encoded data and JSON data from the form submission
app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for handling JSON data
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for cookie parsing
app.use(cookieParser());

// Utility function to read and write to users.json
const readUsers = () => {
  const data = fs.readFileSync('users.json', 'utf8');
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8');
};

// Route to serve login page
app.get('/', (req, res) => {
  res.redirect('/Login');
});

// Route to serve login page
app.get('/Login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'l.html'));
});

// Route to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Read existing users
  const users = readUsers();

  // Find user
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).send('Invalid username or password');
  }

  // Set the username in a cookie
  res.cookie('username', username, { maxAge: 3600000, httpOnly: true });

  // Redirect to home page
  res.redirect('/home');
});

// Route to serve signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Handle user signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Read existing users
  const users = readUsers();

  // Check if user already exists
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).send('User already exists');
  }

  // Add new user
  const newUser = { username, password };
  users.push(newUser);

  // Write to users.json
  writeUsers(users);

  res.status(201).send('User created successfully');
  res.redirect('/login');
});

// Route to access home page
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Handle the form submission (Submit a complaint)
app.post('/submit', (req, res) => {
  // Get the username from cookies
  console.log(req.query);
  const username = req.cookies.username;

  if (!username) {
    return res.status(401).send('You are not logged in');
  }

  // Use the logged-in user's username from cookies
  const complaintData = {
    username,  // Use the logged-in username from cookies
    id: req.body.id,
    busNumber: req.body.busNumber,
    busTitle: req.body.busTitle,
    busDescription: req.body.busDescription
  };

  // Validate the data
  if (!complaintData.id || !complaintData.busNumber || !complaintData.busTitle || !complaintData.busDescription) {
    return res.status(400).send('Missing required fields.');
  }

  // Read the existing complaints JSON file
  fs.readFile('complaints.json', (err, data) => {
    if (err && err.code === 'ENOENT') {
      const complaints = [complaintData];
      fs.writeFile('complaints.json', JSON.stringify(complaints, null, 2), (err) => {
        if (err) {
          return res.status(500).send('Error saving the complaint');
        }
        res.redirect('/home'); // Redirect to the complaints page after submission
      });
    } else if (err) {
      return res.status(500).send('Error reading the complaints file');
    } else {
      const complaints = JSON.parse(data);
      complaints.push(complaintData);

      fs.writeFile('complaints.json', JSON.stringify(complaints, null, 2), (err) => {
        if (err) {
          return res.status(500).send('Error saving the complaint');
        }
        res.redirect('/home'); // Redirect to the complaints page after submission
      });
    }
  });
});

// Route to view user's complaints
app.get('/myComplaints', (req, res) => {
  const username = req.cookies.username;
  if (!username) {
    return res.status(401).send('You are not logged in');
  }

  fs.readFile('complaints.json', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading complaints file');
    }

    const complaints = JSON.parse(data);
    const userComplaints = complaints.filter(complaint => complaint.username === username);

    res.json(userComplaints);
  });
});

// Route to get all complaints
app.get('/getComplaints', (req, res) => {
  fs.readFile('complaints.json', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading complaints file');
    }

    const complaints = JSON.parse(data);
    res.json(complaints); // Send complaints data as JSON response
  });
});

// Route to delete a specific complaint
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile('complaints.json', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading complaints file');
    }

    const complaints = JSON.parse(data);
    const updatedComplaints = complaints.filter(complaint => complaint.id !== id);

    if (updatedComplaints.length === complaints.length) {
      return res.status(404).send('Complaint not found');
    }

    fs.writeFile('complaints.json', JSON.stringify(updatedComplaints, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving complaints');
      }

      res.send('Complaint deleted successfully');
    });
  });
});
// Route to handle logout
app.get('/logout', (req, res) => {
  // Clear the 'username' cookie
  res.clearCookie('username');

  // Redirect the user to the login page
  res.redirect('/Login');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
