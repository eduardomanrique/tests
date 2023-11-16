import express from 'express';

const app = express();
app.use(express.json());
const port = 3000;

// Updated GET endpoint to return JSON
app.get('/get', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// New POST endpoint
app.post('/', (req, res) => {
  // For now, just return status 200
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});