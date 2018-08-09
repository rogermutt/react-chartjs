import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 className="error-message">Something went wrong.</h1>
          <h3 className="error-message">Try refreshing the page</h3>
        </div>
        );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
