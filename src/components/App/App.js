import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from "../SearchResults/SearchResults";
import "typeface-roboto";
import { Route, Switch, withRouter } from 'react-router-dom';
import './styles.scss';

const App = () => {
  return (
    <div className="app--container">
      <Switch>
        <Route
          path="/search_results/q=:query"
          component={SearchResults}
        />
        <Route
          path="/"
          component={SearchForm}
        />
      </Switch>
    </div>
  );
};

export default withRouter(App);