import './App.css';
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Card from './Components/Card/Card';
import fotos from './fotos.jpg'


function App() {
  return (
    <div className="App">
      <Cabecalho />
      <div id='cards'>
        <Card
          imagem={fotos}
          texto="Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing a Ipsum is simply dummy text of the printing and"
          titulo="Ola Mundo" />
          
          <Card
          imagem={fotos}
          texto="Lorem Ipsum is simply dummy text of the printing and"
          titulo="Ola Mundo" />
      </div>
    </div>
  );
}

export default App;
