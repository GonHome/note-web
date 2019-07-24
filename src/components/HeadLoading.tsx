import LoadingBar from 'react-redux-loading-bar'
import * as React from 'react';

class HeadLoading extends React.Component {
  render() {
    return (
      <header className="head-loading" >
        <LoadingBar />
      </header>
    )
  }
}

export default HeadLoading;
