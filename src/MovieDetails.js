import React from 'react'

function MovieDetails(props) {
  return (
    <div>
      <button onClick={props.movieHandler}>Details</button>
    </div>
  )
}

export default MovieDetails