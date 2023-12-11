import React from 'react'

export default function News(props) {
  return (
    <div className='news'>
        <div className='news-img'>
            {
                props.article.urlToImage!==null?
                <img src={props.article.urlToImage}/>:
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' className='no-image'/>
            }
        </div>
        <h1>{props.article.title}</h1>
        <p>{props.article.description?.substring(0,100).concat("...")} 
        <a href={props.article.url} target='_blank'>read more</a>
         </p>
        <div className='source'>
            <p>Author: {props.article.author}</p>
            <p>{props.article.source.name}</p>
        </div>
    </div>
  )
}
