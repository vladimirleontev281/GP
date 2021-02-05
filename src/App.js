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

const Root = props => {
  return <div className="App">
    {props.children}
  </div>
}

function App({postfix, ...props}) {
  return <Route path={`${POSTFIX}`} render={() => <Root {...props} />} >
    <Switch>
      <Route  exact path={'/'} 
              render={() => <NewsfeedContainer postfix={POSTFIX}/>}
      />
      <Route  path={'/login'} 
              render={() => <AuthContainer postfix={POSTFIX}/>}
      />
      <Route  path={'/signup'} 
              render={() => <AuthContainer postfix={POSTFIX}/>}
      />
    </Switch>
  </Route>
}
export default App;