import React, {useEffect, useState} from 'react';
import newsapi from '../helpers/newsApi'
import Header from "./layouts/Header";
import News from "./components/News";

const Technology = () => {
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
      ['au', 'fr', 'us'].map(country => {
        arrPromiseNews.push(
          newsapi.v2.topHeadlines({
            category: 'technology',
            country,
            pageSize: 8,
            page: 1
          })
        )
      });

      Promise.all(arrPromiseNews)
        .then(responses => {
          console.log('technology: ', responses);
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

export default Technology;