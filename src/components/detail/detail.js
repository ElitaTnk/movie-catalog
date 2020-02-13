import React from 'react';
import './detail.scss';

const Detail = (props) => {
  console.log('este es el prop', props, 'este es el curent' , props.current)
  return (
    <div className="detail">
    { props && Object.values(props.current).length > 0  &&
      (<div>
        <img className="detail__background" src={`https://image.tmdb.org/t/p/w500/${props.current.poster_path}`} alt="background"/>
        <h1>{props.current.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${props.current.poster_path}`} alt="item" />
        <p>{props.current.overview}</p>
        <ul>
          <li>Release date: {props.current.release_date}</li>
          <li>Vote Average: {props.current.release_date}</li>
        </ul>
      </div>)
    }
    </div>
  )
}

export default Detail;
