import React from "react"
import Menu from './Components/Menu'
import Public from './Routes/Public'
import {BrowserRouter as Router} from "react-router-dom"
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div>
    <Router>
      <Menu />
      <Container>
      <Public />
      </Container>
      </Router>
      </div>
  );
}

export default App;
