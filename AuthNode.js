// In this example, the client is a React component that renders a button to fetch the secret resource from the server. When the button is clicked, the client sends a GET request to the server with a valid API key in the Authorization header. If the server validates the API key, it responds with a JSON payload containing the secret resource, which is displayed in the React component. Otherwise, the server responds with a 401 Unauthorized status code.


const express = require('express');
const app = express();
const apiKey = 'my_api_key';

app.get('/api/resource', (req, res) => {
  if (req.headers.authorization === `API-Key ${apiKey}`) {
    res.json({ data: 'Secret resource.' });
  } else {
    res.status(401).json({ error: 'Unauthorized.' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});


// In this example, the client still sends a GET request to the server, but the API key is passed using the HTTP Authorization header with a Bearer token. On the server side, the API key is extracted from the Authorization header and compared with the expected API key. If the API key is valid, the server responds with the secret resource. If not, the server responds with a 401 Unauthorized status code.

const express = require('express');
const app = express();
const apiKey = 'my_api_key';

app.get('/api/resource', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  const [authType, authValue] = authHeader.split(' ');
  if (authType !== 'Bearer' || authValue !== apiKey) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  res.json({ data: 'Secret resource.' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});

