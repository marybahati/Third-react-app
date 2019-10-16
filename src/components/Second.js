import React from 'react';
import Begin from './Begin';
import Intouch from './Intouch';
import Events from './Events'

class Second extends React.Component {
  render() {
    return (
      <div id="main">
          <Begin/>
          <Events/>
          <Intouch/>
      </div>
    )
  }
}
export default Second;
