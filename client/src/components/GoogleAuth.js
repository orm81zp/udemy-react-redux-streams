import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    if (typeof window.gapi !== undefined) {
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          clientId: process.env.REACT_APP_CLIENT_ID || '',
          scope: 'email'
        });
      });
    }
  }

  render() {
    return (
      <div>Google Auth</div>
    );
  }
}

export default GoogleAuth;
