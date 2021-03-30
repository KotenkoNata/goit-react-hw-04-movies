import React, { Component } from 'react';
import routes from '../../routes';

class BtnBack extends Component {
  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    return <button onClick={this.handleGoBack}>Return</button>;
  }
}

export default BtnBack;
