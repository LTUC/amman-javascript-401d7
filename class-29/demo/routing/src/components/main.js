import React from 'react';
import { Route, Switch } from 'react-router-dom';
import People from './people';
import Home from './home';
import Details from './details';
import Dynamic from './dynamic';
function Main() {
  return(
      <main>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" render={()=><h2>Profile!!</h2>}/>
          <Route path="/people" component={People}></Route>
          <Route path="/details" component={Details}/>
          <Route path="/dynamic/:id" component={Dynamic}/>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </main>
  )
}

export default Main;
