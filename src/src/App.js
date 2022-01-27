import React, { useState, useLayoutEffect } from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import Gallery from './pages/Gallery';
import SignIn from './pages/SignIn';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );



  return (
    <>
     <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/signin' component={SignIn} />
      </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
