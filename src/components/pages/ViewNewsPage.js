import React, { useState, useEffect } from 'react';

const ViewNewsPage = () => {
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
    <div>

    </div>
  );
}