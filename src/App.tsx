import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/index';
import { AppState } from './redux/store/store';
// import { authenticate } from './containers/account/store/actions'

export type IAppProps = {
  // authenticate: any
};

export interface IAppState { }

class App extends React.Component<IAppProps> {

  // componentDidMount() {
  //   this.checkAuthenticationStatus()
  // }

  // checkAuthenticationStatus = () => {
  //   const { authenticate } = this.props;
  //   const authKey = localStorage.getItem('authentication_key');
  //   return authKey !== null
  //     ? authenticate(localStorage.getItem('authentication_key'))
  //     : null;
  // };


  render() {
    return (
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});

export default connect(mapStateToProps, { })(App);
