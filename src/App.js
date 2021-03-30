import React, { Suspense, lazy } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /*webpackChunkName: "home-view" */),
);

const MoviesPageView = lazy(() =>
  import('./views/MoviesPageView.js' /*webpackChunkName: "movies-view" */),
);

const MovieDetailsPageView = lazy(() =>
  import(
    './views/MovieDetailsPageView' /*webpackChunkName: "movie-details-view" */
  ),
);

const App = () => (
  <Container>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.moviesPage} component={MoviesPageView} />
        <Route path={routes.movieDetails} component={MovieDetailsPageView} />
        {/* <Route component={NotFoundView} /> */}
      </Switch>
    </Suspense>
  </Container>
);

export default App;
