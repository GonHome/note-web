import LoadingBar from 'react-redux-loading-bar'
import * as React from 'react';

class HeadLoading extends React.Component {
  render() {
    return (
      <header style={{ height: 2, width: '100%' }}>
        <LoadingBar />
      </header>
    )
  }
}

export default HeadLoading;
