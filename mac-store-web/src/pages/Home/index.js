import React, { Component } from 'react';
import { Products, Pagination, Carousel, Newsletter, NewsletterPopUp } from '../../components';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Products />
        <Pagination />
        <Newsletter />
        <NewsletterPopUp />
      </div>
    );
  }
}

export default Home;