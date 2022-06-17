import React, {useState} from "react";
import TelaMatches from "./components/TelaMatches";
import Tela from "./components/Tela";
import axios from "axios";



function App() {
  const [telaPrincipal, setTelaPrincipal] = useState('principal')


  const mostrarTela = () => {
    switch (telaPrincipal) {
      case "principal":
        return <Tela onChangeTelaMatches={onChangeTelaMatches}/>;
        case "match":
          return <TelaMatches onChangeTela={onChangeTela}/>;
          default:
            <p> Algo deu errado!</p>
    }
  };


  const onChangeTela = () => {
    setTelaPrincipal("principal")
  };

  const onChangeTelaMatches = () => {
    setTelaPrincipal("match")
  };


  const reseta = () => {
    axios
       .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jucelia-xavier-guimaraes/clear"
       )
       .then((res) => {
         setTelaPrincipal("principal")
       })
       .catch((error) => {
         console.log(error.response)
       });
  };


  return (
    <div>
    
               {mostrarTela()} 

             <button  onClick={reseta}>Limpar</button> 

    </div>

  );


}

export default App;

