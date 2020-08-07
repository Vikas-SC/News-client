import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [news, setNews] = useState({});
  useEffect(() => {
    callApi()
  }, [])
  const callApi = () => {
    fetch('http://localhost:9000/api/news')
      .then(res => res.json())
      .then(data => {
        console.log('articles', data);
        setNews(data)
      })
      .catch(err => err)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        {
          news.articles && news.articles.map((n) => <p>{n.title}</p>)
        }
      </div>
    </div>
  );
}

export default App;
