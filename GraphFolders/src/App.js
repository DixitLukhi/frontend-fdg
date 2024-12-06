import React, { useState, useEffect } from 'react';

function test() {
  console.log("test");
  let t = 12;
  let a = 15;
}

function App() {
  // State to hold the data from the API
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // This effect runs once when the component mounts
  useEffect(() => {
    // Fetching data from the API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data); // Set the fetched data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        setError(error);
        setLoading(false); // Set loading to false if there’s an error
      });
  }, []); // Empty array ensures this runs only once

  // Display a loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display an error message if there was an issue with the fetch
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render the data once it has been fetched
  return (
    <div className="App">
      <h1>API Data</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
