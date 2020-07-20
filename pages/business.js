import React, {useEffect, useState} from 'react';
import newsapi from '../helpers/newsApi'
import Header from "./layouts/Header";
import News from "./components/News";

const Business = () => {
  const [data, setData] = useState([]);

  const mergeNewData = (responses) => {
    const arrNews = [];
    responses.map(response => {
      arrNews.push(...response);
    });
    return arrNews;
  }

  useEffect(() => {
    let unmounted = false;
    
    if (!unmounted) {
      const arrPromiseNews = [];
      ['sg', 'id', 'us'].map(country => {
        arrPromiseNews.push(
          newsapi.v2.topHeadlines({
            category: 'business',
            country,
            pageSize: 8,
            page: 1
          })
        )
      });

      Promise.all(arrPromiseNews)
        .then(responses => {
          if (responses[0].status === 'ok') {
            let articles = responses.map(e => e.articles);
            setData(mergeNewData(articles))
          }
        })
        .catch(err => {
          console.log('status false', err);
        })
    }
    return () => {
      unmounted = true;
    }
  }, []);

  return (
    <>
      <Header/>
      <News data={data}/>
    </>
  )
}

export default Business;