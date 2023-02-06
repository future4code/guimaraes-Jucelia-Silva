import './App.css';
import SideBar from './Components/SideBar';
import SideBall from './Components/SideBall';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [contests, setContests] = useState([]);
  const [contestChosen, setContestChosen] = useState(0);
  const [contestID, setContestID] = useState(0);
  const [infoContest, setInfoContest] = useState({});
  useEffect(()=>{
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias/")
      .then(res=> setContests(res.data))
  },[]);

  useEffect(()=>{
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos/")
      .then(res=>setContestID(res.data[contestChosen].concursoId))
    
  }, [contestChosen])

 
  useEffect(()=>{
    if(contestID !== 0){
      axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${contestID}`)
      .then(res=> setInfoContest(res.data))
      .catch(err=> console.log(err))
    }
  }, [contestID])

  const handleContestChosen = (index)=>{
    setContestChosen(index);
  }
  return (
    <main className="App"> 
      <SideBar contests={contests} handleContestChosen={handleContestChosen} contestChosen={contestChosen} infoContest={infoContest}/>
      <SideBall infoContest={infoContest}/>
    </main>
  );
}

export default App;
