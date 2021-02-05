import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsfeedContainer from './components/Newsfeed/NewsfeedContainer';
import AuthContainer from './components/Authentication/AuthContainer';
import { getRoutePrefix } from "./utils";

const MY_ROUTS = {
  login: '/login',
  signup: '/signup'
};
const PREFIX = getRoutePrefix(MY_ROUTS);

function App(props) {
  // debugger
  return <div className="App">
    <Switch>
      <Route  exact path={`${PREFIX}/`} 
              render={() => <NewsfeedContainer prefix={PREFIX} />}
      />
      <Route  path={`${PREFIX}/login`} 
              render={() => <AuthContainer prefix={PREFIX} />}
      />
      <Route  path={`${PREFIX}/signup`} 
              render={() => <AuthContainer prefix={PREFIX} />}
      />
    </Switch>
  </div>
}
export default App;