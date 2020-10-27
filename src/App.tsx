import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import { tabs } from './components/Constants'
import Cover from './components/Cover'

class App extends Component {
  render() {
    return (
      <Router >
        <div className="text-center root-class col-md-8 col-xs-12 col-sm-12 d-flex w-100 p-3 mx-auto flex-column">
          <Header />
          <Switch>
            {tabs && tabs.map(tab => (
              <Route
                key={tab.name}
                exact
                path={tab.path}
                component={() => <Cover {...tab.props} />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
