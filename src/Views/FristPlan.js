import React from 'react'
import styled from 'styled-components'
import CardClass from '../Components/CardClass'
import Pesas from '../images/pesas1.jpg'

export default function FristPlan() {

    const  handleClick = () => {
        console.log("Hola");
    };

    return (
        <DivPlan>
            <div className="content">
                <h1>CLASES DISPONIBLES</h1>
                <span>No pongas más excusas y elegí tu primera clase</span>
                <div className="cards">
                    <CardClass title="ENTRENAMIENTO FUNCIONAL" image={Pesas} onChannge={handleClick}/>
                    <CardClass title="CROSS TRAINING" image={Pesas} onChannge={handleClick}/>
                    <CardClass title="LOCALIZADA" image={Pesas} onChannge={handleClick}/>
                </div>
            </div>
        </DivPlan>
    )
}

const DivPlan = styled.div`
    width: 100%;
    /* height: 669px; */
    background: #343a40;

    .content{
        padding: auto;
        align-content: space-between;
    }

    .content h1{
        margin: auto;
        color: #ffff;
        font-weight: 500;
    }

    .content span{
        /* margin-top: 10pc; */
        color: #ffff;
        font-weight: 300;
    }

    .cards{
        margin-top: 20px;
        padding: 30px;
        text-align: center;
        display: block;
        align-content: center;
        align-items: center;
        align-self: center;
    }

    @media screen and (min-width: 768px) {
        .content{
            color:#ffff;
            width: 100%;
            height:100%;
            padding: auto;
            display:block;
            align-content: space-between;
        }

        .cards{
        width: 90%;
        margin-top: 20px;
        padding: 30px;
        text-align: center;
        display: flex;
    }
    }
`