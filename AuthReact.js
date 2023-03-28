import React, { useState } from 'react';
import axios from 'axios';

const url = 'https://example.com/api/resource';
const apiKey = 'my_api_key';

function App() {
  const [data, setData] = useState(null);

  const config = {
    headers: {
      'Authorization': `API-Key ${apiKey}`
    }
  };

  const handleGetResource = () => {
    axios.get(url, config)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setData(null);
      });
  };

  return (
    <div>
      <button onClick={handleGetResource}>Get Resource</button>
      {data && <p>{data.data}</p>}
    </div>
  );
}

export default App;

// It is generally not safe to pass an API key using the GET method because the API key may be visible in the URL, server logs, or browser history. This can potentially expose the API key to unauthorized users or attackers.

// Instead, it is recommended to use a more secure method to pass the API key, such as using the HTTP Authorization header with a secure token like a Bearer token.

// Here's an example implementation of API key authentication using Bearer token authentication:

// Client Implementation (using React.js and Axios library):

import React, { useState } from 'react';
import axios from 'axios';

const url = 'https://example.com/api/resource';
const apiKey = 'my_api_key';

function App() {
  const [data, setData] = useState(null);

  const config = {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  };

  const handleGetResource = () => {
    axios.get(url, config)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setData(null);
      });
  };

  return (
    <div>
      <button onClick={handleGetResource}>Get Resource</button>
      {data && <p>{data.data}</p>}
    </div>
  );
}

export default App;
