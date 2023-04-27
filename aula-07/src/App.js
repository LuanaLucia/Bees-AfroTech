import './App.css';
import BotaoMenu from './Components/BotaoMenu/BotaoMenu';


function App() {
  return (
    <div className="App">
      <BotaoMenu nome="Home"/>
      <BotaoMenu nome="Catalogo"/>
      <BotaoMenu nome="Contato"/>

    </div>
  );
}

export default App;
