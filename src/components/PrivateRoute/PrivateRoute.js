import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../Context/UserContext';

const PrivateRoute = ({ children, ...rest }) => {
  const {signedInUser, setSignedInUser }= useContext(UserContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
      signedInUser.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;