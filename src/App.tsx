import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import Container from './components/Container';
import AppTheme from './styles/AppTheme';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div className="App">
        <Container />
      </div>
    </ThemeProvider>
  );
}

export default App;
