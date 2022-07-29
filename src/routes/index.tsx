import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import Container from '../container';
import { routes } from './routes';

export function Routes() {
  const renderRoutes = () => {
    return React.createElement(
      Container,
      {},
      routes.map((route: any) => {
        return (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => {
              return (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              );
            }}
          />
        );
      }),
    );
  };

  return (
    <BrowserRouter>
      <Switch>{renderRoutes()}</Switch>
    </BrowserRouter>
  );
}
