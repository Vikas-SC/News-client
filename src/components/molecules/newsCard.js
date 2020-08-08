import React from 'react'

const NewsCard = ({ title, image, author, url, description, index }) => {
  return (
    <div key={index} className="col mb-4">
      <div className="card h-100">
        <div className="view overlay">
          <img className="card-img-top" src={image}
            alt="Card image cap" />
          <a href={url} target="_blank">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard;