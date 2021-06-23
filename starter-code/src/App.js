import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login';
import Profile from './components/Profile';
import MyFavoriteBooks from './MyFavoriteBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {

  render() {
    console.log('app', this.props)
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>

          <IsLoadingAndError>
            <Header />

            <Switch>

              <Route exact path="/">
              <Login />
                {isAuthenticated && (
                  <>
                    <MyFavoriteBooks />
                  </>
                )}
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/profile">
			  {isAuthenticated && (
                  <>
                   <Profile/>
                  </>
                )}  
              </Route>

              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          </IsLoadingAndError>

        </Router>
      </>
    )
  }
}


export default withAuth0(App)






