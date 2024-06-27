// import logo from './logo.svg';
import './App.css';

// componentes
import { HelloWord } from './components/HelloWord';


function App() {
  const name = 'Nathalia'

  const newName = name.toUpperCase()

  function sum (a, b) {
    return a + b
  }

  // tamanho no final de 150 x 150 
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="minha imagem" />
      <HelloWord />
    </div>
  );
}

export default App;
