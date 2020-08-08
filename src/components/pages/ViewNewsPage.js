import React, { useState, useEffect } from 'react';
import config from '../../config/index';
import NewsCard from '../molecules/newsCard';
import SearchComponent from '../molecules/search';
import { StyledDiv } from './styled/index'

const ViewNewsPage = () => {
  const [news, setNews] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    callApi()
  }, [])
  const callApi = (query) => {
    query = query ? query : 'Latest news';
    fetch(`${config.baseUrl}${config.newsEndpoint}/query=${query}`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setNews(data)

      })
      .catch(err => err)
  }

  const searchNews = (searchText) => {
    if (searchText) {
      callApi(searchText);
    }
  }

  const renderNews = () => {
    if (news.articles && news.articles.length > 0) {
      return (
        news.articles.map((n, i) => <NewsCard
          title={n.title}
          image={n.urlToImage}
          author={n.author}
          url={n.url}
          description={n.description}
          index={i}
        />)
      )
    } else if (news.articles && news.articles.length === 0 && !isLoading) {
      return <h3>There are no news avaliable</h3>
    } else {
      return <h3>Loading news....</h3>
    }
  }

  return (
    <StyledDiv>
      <div>
        <SearchComponent searchNews={searchNews} />
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        {
          renderNews()
        }
      </div>
    </StyledDiv>
  );
}

export default ViewNewsPage;