import React from 'react';
import ReactDOM from 'react-dom';
import MovieReviews from './components/MovieReviews'
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
    <MovieReviews />
  </div>,
  document.getElementById('root')
);