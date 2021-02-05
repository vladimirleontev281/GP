import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsfeedContainer from './components/Newsfeed/NewsfeedContainer';
import AuthContainer from './components/Authentication/AuthContainer';
import { getPostfix } from "./utils";

const MY_ROUTS = {
  login: '/login',
  signup: '/signup'
};
const POSTFIX = getPostfix(MY_ROUTS);

function App({postfix, ...props}) {
  return <div className="App">
    <Switch>
      <Route  exact path={`${POSTFIX ? POSTFIX : '/'}`} 
              render={() => <NewsfeedContainer postfix={POSTFIX}/>}
      />
      <Route  path={`${POSTFIX ? POSTFIX + '/login' : '/login'}`} 
              render={() => <AuthContainer postfix={POSTFIX}/>}
      />
      <Route  path={`${POSTFIX ? POSTFIX + '/login' : '/signup'}`} 
              render={() => <AuthContainer postfix={POSTFIX}/>}
      />
    </Switch>
  </div>;
}
export default App;