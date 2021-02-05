import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsfeedContainer from './components/Newsfeed/NewsfeedContainer';
import AuthContainer from './components/Authentication/AuthContainer';

const MY_ROUTS = {
  login: '/login',
  signup: '/signup'
};

function App(props) {
  return <div className="App">
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
  </div>
}
export default App;