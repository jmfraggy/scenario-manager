import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components 
import Sidebar from './components/layout/Sidebar';
import Scenarios from './components/pages/Scenarios';
import History from './components/pages/History';
import Results from './components/pages/Results';
import Home from './components/pages/Home';

// Redux 
import { Provider } from 'react-redux';
import store from './store/store';

//Styling
import './assets/styles/App.scss';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
            <Route exact path='/scenarios/manager' component={Scenarios} />
            <Route exact path='/scenarios/history' component={History} />
            <Route exact path='/scenarios/results' component={Results} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
