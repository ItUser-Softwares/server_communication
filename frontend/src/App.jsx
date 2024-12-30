import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Fetched data:', result); // Log the fetched data
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{data ? JSON.stringify(data[0].name) : 'Loading...'}</p>
      <p>{data ? JSON.stringify(data[1].name) : 'Loading...'}</p>
      <p>{data ? JSON.stringify(data[2].name) : 'Loading...'}</p>
      <p>{data ? JSON.stringify(data.find(person => person.name === 'Bid')) : 'Loading...'}</p>
      <p>{data ? data.length : 'Loading...'}</p>
    </div>
  );
}

export default App;
