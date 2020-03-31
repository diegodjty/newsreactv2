import React from 'react'
import News from './News';
import PropTypes from 'prop-types'

const NewsList = ({news}) => {
    return(
    <div className="row">
        {news.map(i => (
            <News
                key={i.url}
                news={i}
             />
        ))} 
    </div>
    )
}

NewsList.propTypes = {
    news : PropTypes.array.isRequired
}
export default NewsList
