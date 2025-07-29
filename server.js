const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const path = require('path');

// Models
const User = require('./models/User');
const Complaint = require('./models/Complaint');

// Init
const app = express();
const port = 3000;

// Connect DB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.redirect('/Login'));

app.get('/Login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'l.html'));
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (!user) return res.status(401).send('Invalid username or password');

  res.cookie('username', username, { maxAge: 3600000, httpOnly: true });
  res.redirect('/home');
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).send('User already exists');

  await User.create({ username, password });
  res.redirect('/Login');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.post('/submit', async (req, res) => {
  const username = req.cookies.username;

  if (!username) return res.status(401).send('You are not logged in');

  const { id, busNumber, busTitle, busDescription } = req.body;

  if (!id || !busNumber || !busTitle || !busDescription)
    return res.status(400).send('Missing required fields.');

  await Complaint.create({ username, id, busNumber, busTitle, busDescription });
  res.redirect('/home');
});

app.get('/myComplaints', async (req, res) => {
  const username = req.cookies.username;
  if (!username) return res.status(401).send('You are not logged in');

  const complaints = await Complaint.find({ username });
  res.json(complaints);
});

app.get('/getComplaints', async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
});

app.delete('/delete/:id', async (req, res) => {
  const result = await Complaint.deleteOne({ id: req.params.id });

  if (result.deletedCount === 0) {
    return res.status(404).send('Complaint not found');
  }

  res.send('Complaint deleted successfully');
});

app.get('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/Login');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
