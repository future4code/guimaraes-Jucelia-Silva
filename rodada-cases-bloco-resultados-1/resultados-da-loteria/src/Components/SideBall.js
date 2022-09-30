import React, { useEffect, useState } from 'react';
import "./SideBall.css"
import Ball from './Ball';
const SideBall = ({infoContest})=>{
    const shuffledBalls = Object.keys(infoContest).length !== 0 ? (
        infoContest.numeros.map((ball,index)=>{
            return <Ball key={parseInt(index)} ball={ball} />
        })
    ) : []           
    
    return(
        <section className='container-sideball'>
            <ul id="ul-section">
                {shuffledBalls}
            </ul>
            <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
        </section>
    );
}

export default SideBall;