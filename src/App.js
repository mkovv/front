import React from "react";

import AppContextProvider from './contexts/AppContext';
import Router from './router/Router';

import { callIntercept } from './services/intercept';

callIntercept();

function App() {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

export default App;