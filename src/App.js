import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import Detail from './components/detail/detail';
import List from './components/list/list';

function App() {
  const [results, setResults] = useState([]);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=29e9201e94c3a8719181cc184020a38d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`).then(response => {
      return response.json();
    }).then(data => {
      setResults(data.results);
    })
  }, [])

  const passItem = (post) => {
    setCurrent(post)
  }

  return (
    <div className="App">
      <Detail current={current} />
      <List results={results} passItem={passItem}/>
    </div>
  );
}

export default App;
