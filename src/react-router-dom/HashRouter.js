import React from 'react';
import RouterContext from './context';
export default class HashRouter extends React.Component {
  state = {
    location: {
      // pathname: window.location.hash || '/'
      pathname: window.location.hash.slice(1),
      // state: null
    }
  }
  componentWillMount () {
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          // state: this.locationState
        }
      });
    });
    window.location.hash = window.location.hash || '/';//默认值就是/
  }
  render () {
    let value = {
      location: this.state.location
    }

    return (

      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}