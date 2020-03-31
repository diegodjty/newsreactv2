import React from 'react'
import PropTypes from 'prop-types'

const News = ({news}) => {

    const{urlToImage,title,url,description,source} = news;

    const img = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
    : null;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {img}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a 
                        href={url} 
                        target="_black" 
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"                      
                    >View full document</a>
                </div>
            </div>
        </div>
    )
}
News.propTypes = {
    news : PropTypes.object.isRequired
}

export default News
