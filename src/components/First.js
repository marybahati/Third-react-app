import React from 'react';
import Intro from './Intro';
import Contact from './Contact';
import Footer from './Footer';

class First extends React.Component {
  render() {
    return (
      <div>
          <Intro/>
          <Contact/>
      </div>
    )
  }
}
export default First;
