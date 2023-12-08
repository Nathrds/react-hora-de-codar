import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from "react";
import Title from './components/Title';

function App() {
  const n = 15;

  const [name] = useState("Ana");

  const redTitle = true;

  return (
    <div className="App">
      {/* css global */}
      <h1>React com CSS</h1>
      {/* css de component */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* inline css */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>CSS dinâmico</h2>
      <h2 style={name === "Ana" ? {color: "green", backgroundColor: "#000"} : null}>Teste nome</h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title" }>Esse título vai ter clase dinâmica</h2>
      {/* css modules - restringir o css a nivel de componente*/}
      <Title />
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
