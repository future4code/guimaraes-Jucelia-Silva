import React, {useEffect, useState} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard.js";
import "./App.css"

const App = (props) => {
    const [pokeList, setPokeList] = useState([])
    const [pokeName, setPokeName] = useState('')

    const changePokeName = (e) => {
      setPokeName(e.target.value);
    };

    useEffect(() => {
        axios
          .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
          .then((res) => setPokeList(res.data.results))
          .catch((err) => console.log(err));
      },
    [])


      return (
        <div className="App">
          <select onChange={changePokeName}>
            <option value={""}>Nenhum</option>
            {pokeList.map(pokemon => {
              return (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              );
            })}
          </select>
          {pokeName && <PokeCard pokeName={pokeName} />}
        </div>
      );
    }
  

  export default App;