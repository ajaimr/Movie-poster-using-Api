import React from 'react'
import './movie.css'
const movie = (props) => {
  return (
    <div className='dis'> 

  {props.movies.map((val)=>(
        <div className='display'>

    <img src={val.Poster} alt={val.Title}></img>
    </div>
  )
    
  
  )}
</div>
  
  )
}

export default movie