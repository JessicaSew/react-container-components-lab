import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'pdf38IpzgVmhYmfaLxKzzt2cHMUcPr76';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews:[],
        searchTerm: ''
       }
     
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => 
        this.setState({
        reviews : data.reviews
        })
      )
  }

  handleSubmit = (e) => {
        e.preventDefault()
  }

  handleInput = (e) => {
      this.setState({searchTerm: e.target.value})
  }

  render() {
    return (
    <div className="searchable-movie-reviews">
   <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInput}></input>
   </form>
   <MovieReviews reviews={this.state.reviews} />
    </div>
    )
  }
  
}

export default SearchableMovieReviewsContainer