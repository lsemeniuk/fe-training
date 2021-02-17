import React, { PureComponent } from 'react'
import Error500 from '../Error500/Error500';

class ErrorBoundary extends PureComponent {
  state = {
    errorPresent: false
  }

  // componentDidCatch(error, errorInfo) {
  //   axios.post('/api/errors', JSON.stringify({error, errorInfo}))
  //   this.setState({ errorPresent: true })
  // }

  static getDerivedStateFromError (error) {
    return {errorPresent: true}
  }

  render() {
    const { errorPresent } = this.state;
    const { children } = this.props;

    // console.log(this)

    if (errorPresent) {
      return <Error500 />
    }

    return children
  }
}

export default ErrorBoundary