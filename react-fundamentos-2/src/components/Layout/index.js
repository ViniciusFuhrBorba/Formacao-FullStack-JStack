import React, { Component } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends Component {
  componentDidMount() {
    console.log('componentDidMount - Layout')
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount - Layout');
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    console.log('scrolled...')
  }

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    )
  }
}