import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxCounter from './pages/ReduxCounter';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    </div>
  );
}

export default App;
