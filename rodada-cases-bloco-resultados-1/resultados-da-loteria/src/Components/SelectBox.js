import React, { useState } from 'react';
import "./SelectBox.css";
const SelectBox = ({contests,handleContestChosen})=>{

    const handleChosen = event =>{
        handleContestChosen(parseInt(event.target.options[event.target.selectedIndex].value))
    }



    return(
        <select onChange={handleChosen} name='contest' className='contest-select'>
            <option value="0">choose an option</option>
            {
                contests.map(({id, nome})=>{
                    return(
                        <option key={id} value={id}>{nome}</option>
                    )
                })
            }
        </select>

    );
}

export default React.memo(SelectBox);