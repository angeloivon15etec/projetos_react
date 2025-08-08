import logo from './logo.svg';
import './App.css';
import Helloworld from './components/Helloworld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "tralalelo tralala"
  return (
    <div className="App">
      <h1>MEU APP REACT</h1>
      <Frase />
      <Helloworld />
      <Frase />
      <DigaMeuNome nome="Denner" />
      <DigaMeuNome nome="Angelo" />
      <DigaMeuNome nome={nome} />
    </div>
  );
}

export default App;
