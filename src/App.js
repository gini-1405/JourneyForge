import React from "react";
import "./App.css";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JourneyForge</h1>
        <h2>
          AI Unveils Dream <span>Destinations</span>
        </h2>
        <p>
          Don't know where to go for this vacation? We got you covered.
          <br />
          Explore personalized travel destinations effortlessly
        </p>
      </header>
      <Form />
    </div>
  );
}

export default App;