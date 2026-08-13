require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mockJobs = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'Google',
    type: 'internship',
    location: 'Bangalore',
    salary: '₹50,000/month',
    verified: true,
    rating: 4.8
  }
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server running', timestamp: new Date() });
});

app.get('/api/jobs', (req, res) => {
  res.json(mockJobs);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
