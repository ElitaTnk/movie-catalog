import React from 'react';
import './list.scss';
import Item from '../item/item';

const List = (props) => {
  return (
    <div className="list">{props.results.map((post, i) => (
      <Item post={post} i={i} passItem={props.passItem}/>
    ))}
    </div>
  )
}

export default List;
