import './App.css';
import ada from './ada.webp';
import fotos from './fotos.jpg';
import Imagem from './Components/Imagem/Imagem';

function App() {
  return (
    <div className="App">
      <Imagem local={ada} texto='Ola'/>
      <Imagem local={fotos} texto='Oie'/>
    </div>
  );
}

export default App;
