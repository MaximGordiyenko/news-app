import React from "react";
import {Title} from "../style/global";
import Link from "next/link";

const News = ({data}) => {
  let pathURL = window.location.pathname.replace(/[/]/g, '').toUpperCase()
  return (
    <>
      <Title>{pathURL} News</Title>
      <Link href={'/'}><a style={{position: 'absolute', top: 10, left: 20}}>Home</a></Link>
      {
        data && data.length < 1 && <div style={{textAlign: 'center'}}>Getting news...</div>
      }
      {
        data && data.length > 0 &&
        <table>
          <thead>
          <tr>
            <th>#</th>
            <th>Source</th>
            <th>Author</th>
            <th>Title</th>
            <th>Published</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {
            data.map((d, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{d.source.name}</td>
                <td>{d.author}</td>
                <td>{d.title}</td>
                <td>{d.publishedAt}</td>
                <td>
                  <a target="_blank" href={d.url}>Open News</a>
                </td>
              </tr>
            ))
          }
          </tbody>

        </table>
      }
    </>
  );
}

News.getInitialProps = async () => {
  const res = await fetch('http://newsapi.org/')
  const data = await res.json()
  return {
    data: data
  }
}

export default News;