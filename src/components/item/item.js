import React from 'react';
import './item.scss';


const Item = ({post, i, passItem}) => {
  return (
    <div className="item" key={i} onClick={() => passItem(post)}>
      <h2>{post.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt="item" />
      <p>{post.overview}</p>
    </div>
  )
}

export default Item;
