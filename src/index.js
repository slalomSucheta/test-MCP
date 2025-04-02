const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from test-MCP!');
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'test-MCP',
    version: '1.0.0',
    description: 'Test project for MCP (Multi-Cloud Platform)',
    status: 'active'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API available at http://localhost:${port}/api/info`);
});