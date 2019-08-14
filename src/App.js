import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Gateway from './components/Gateway'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import FowwestView from './components/FowwestView'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <BrowserRouter>
          <Route exact path = "/" component={Gateway} />

            <Route path = "/signup" component={SignUp} />
            <Route path = "/login" component={LogIn} />

          <Route path = "/squiggles" component={FowwestView} />
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}

export default App;
