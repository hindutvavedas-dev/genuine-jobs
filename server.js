require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Mock Jobs Data
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
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Amazon',
    type: 'placement',
    location: 'Hyderabad',
    salary: '₹12-15 LPA',
    verified: true,
    rating: 4.6
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'Apple',
    type: 'internship',
    location: 'Bangalore',
    salary: '₹60,000/month',
    verified: true,
    rating: 4.9
  }
];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server running', timestamp: new Date() });
});

app.get('/api/jobs', (req, res) => {
  const { type, company } = req.query;
  let filtered = mockJobs;

  if (type && type !== 'all') {
    filtered = filtered.filter(j => j.type === type);
  }
  if (company && company !== 'all') {
    filtered = filtered.filter(j => j.company === company);
  }

  res.json(filtered);
});

app.post('/api/verify-job', async (req, res) => {
  const { title, company, description, salary } = req.body;
  
  res.json({
    isGenuine: true,
    confidence: 95,
    redFlags: [],
    reason: 'Job posting looks legitimate'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(🚀 Server running on port ${PORT});
});
