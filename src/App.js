import React,{Fragment,useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header'
import Form from './components/Form'
import NewsList from './components/NewsList';

function App() {


  const [category,setCategory] = useState('');
  const [news,setNews]= useState([]);

  useEffect(()=>{
    const consultAPI = async () =>{
    const apiKey='7a8e9d69843944fe921886aea591ff7b'
    const url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    const response = await axios.get(url)
    setNews(response.data.articles);
    }
    consultAPI()
  },[category])

  return (
    <Fragment>
      <Header 
        title={'News searcher'}
      />
      <div className="container white">
        <Form 
          setCategory={setCategory}
        />
        <NewsList 
          news={news}
        />
      </div>
    </Fragment>
    
  );
}

export default App;
