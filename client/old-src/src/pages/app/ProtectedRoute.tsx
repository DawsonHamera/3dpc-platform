// ProtectedRoute.tsx
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';

interface ProtectedRouteProps extends RouteProps {
  allowedRoles: string[];
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, component: Component, ...rest }) => {
  const user = useSelector(selectCurrentUser);
  return (
    <Route
      {...rest}
      render={props =>
        user && allowedRoles.includes(user.role.name)
          ? <Component {...props} />
          : <div>Access Denied</div>
      }
    />
  );
};

export default ProtectedRoute;