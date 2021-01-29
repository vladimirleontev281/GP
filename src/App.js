import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsfeedContainer from './components/Newsfeed/NewsfeedContainer';
import LoginContainer from './components/Login/LoginContainer';
import SignupContainer from './components/Signup/SignupContainer';

function App() {
  return <div className="App"><Switch>
    <Route exact path={'/'} render={() => <NewsfeedContainer />}/>
    <Route exact path={`/login`} render={() => <LoginContainer />}/>
    <Route exact path={`/signup`} render={() => <SignupContainer />}/>
  </Switch></div>;
}
export default App;
