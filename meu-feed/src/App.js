import './App.css';
import Header from './Components/Header/Header';
import { IoIosPaw } from "react-icons/io";
import Line from './Components/Line/Line';
import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
import logo from './logo.svg'



function App() {
  return (
    <div className="App">
      <Header icone={<IoIosPaw />} titulo="Meu Feed" />
      <Line />
      <div className="centro">
        <Input />
      </div>
      <div className="esquerda">
        <Button texto="Publicar" />
      </div>
      <Line />
      <div className="centro">
        <Card
          imagem={logo}
          titulo="Fulaninho de tal"
          texto="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages," />
        <br />
        <Card
          imagem={logo}
          titulo="Fulaninho de tal"
          texto="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages," />
      </div>
    </div>
  );
}

export default App;
