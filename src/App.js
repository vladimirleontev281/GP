import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsfeedContainer from './components/Newsfeed/NewsfeedContainer';
import AuthContainer from './components/Authentication/AuthContainer';
import { getRoutePrefix } from "./utils";

const MY_ROUTS = {
  login: '/login',
  signup: '/signup'
};
const PREFIX = getRoutePrefix(MY_ROUTS);

const App = props => (
  <div className="App">
    <Router basename = {`${PREFIX}`} >
      <Switch>
        <Route  exact path={'/'} 
                render={() => <NewsfeedContainer />}
        />
        <Route  path={MY_ROUTS.login} 
                render={() => <AuthContainer />}
        />
        <Route  path={MY_ROUTS.signup} 
                render={() => <AuthContainer />}
        />
      </Switch>
    </Router>
  </div>
);
export default App;