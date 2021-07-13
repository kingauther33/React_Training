import React from 'react';
import { Jumbotron, Container } from "react-bootstrap";
// import SearchForm from './components/SearchForm';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron>
          <h1>Seach App</h1>
          <p>This is a search App</p>
          {/* <SearchForm /> */}
        </Jumbotron>
      </Container>

      {/* <Results /> */}
    </div>
  );
}

export default App;
