import './App.css';
import Header from './components/Header';
import Cartao from './components/Cartao';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Cartao
      foto="https://farm4.static.flickr.com/3103/3163599585_902beb29b3_o.jpg"
      nome="bob"
      profi="pedreiro"
      descricao="Bob e um cahcorro forte que pode levar varios tijolos por dia"/>
      <Footer/>


    </div>
  );
}

export default App;
