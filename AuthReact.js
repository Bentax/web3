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
