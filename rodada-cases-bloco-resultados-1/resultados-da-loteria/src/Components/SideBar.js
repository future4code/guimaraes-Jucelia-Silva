import React from 'react';
import "./SideBar.css";
import SelectBox from './SelectBox';
const SideBar = ({contests, handleContestChosen, contestChosen,infoContest})=>{
    const name_sidebar = contests.length >0 ? contests[contestChosen].nome : "Mega-sena";
    return (
        <div className='sidebar'>
            <SelectBox contests={contests} handleContestChosen={handleContestChosen}/> 
            <h1>
                <img style={{height:'55px', width:"59px"}} src='/assets/img/Logo_Sena.png' alt='logo'/>
                {name_sidebar}
            </h1>
            <div>
                <span id="concurso">Concurso</span>
                <span id="id-data">
                    {
                       Object.keys(infoContest).length !== 0 ? (
                           `${infoContest.id} - ${new Date(infoContest.data).getDate()}/${new Date(infoContest.data).getMonth()}/${new Date(infoContest.data).getFullYear()} `
                       ): ""         
                    }
                </span>
            </div>
            
        </div>
        
    );
}

export default SideBar;