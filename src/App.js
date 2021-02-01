import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsfeedContainer from './components/Newsfeed/NewsfeedContainer';
import AuthContainer from './components/Authentication/AuthContainer';
// import SignupContainer from '../temp/Signup/SignupContainer';

function App() {
  return <div className="App"><Switch>
    <Route exact path={'/'} render={() => <NewsfeedContainer />}/>
    <Route exact path={`/login`} render={() => <AuthContainer />}/>
    <Route exact path={`/signup`} render={() => <AuthContainer />}/>
  </Switch></div>;
}
export default App;
