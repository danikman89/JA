import './App.css';
import { useEffect, useState } from 'react';
import { fetchTopTracks } from './fetchers/fetchTopTracks';
import { Table } from './components/Table';

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTopTracks()
      .then(data => setTracks(data.toptracks.track))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Table tracks={tracks} />
    </div>
  );
}

export default App;
