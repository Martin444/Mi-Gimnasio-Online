import React from 'react'
import styled from 'styled-components'
import CardClass from '../Components/CardClass'
import CrossTrain from '../images/crosstra.jpg'
import Funcional from '../images/funcional1.jpg'
import Localizada from '../images/localizada.jpg'

export default function FristPlan(props) {

    const  handleClick = () => {
        props.close();
    };

    return (
        <DivPlan>
            <div className="content">
                <h1>CLASES DISPONIBLES</h1>
                <span>No pongas más excusas y elegí tu primera clase</span>
                <div className="cards">
                    <CardClass title="ENTRENAMIENTO FUNCIONAL" image={Funcional} onChannge={handleClick} close={props.close}/>
                    <CardClass title="CROSS TRAINING" image={Localizada} onChannge={handleClick} close={props.close}/>
                    <CardClass title="LOCALIZADA" image={CrossTrain} onChannge={handleClick} close={props.close}/>
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
        align-content: center;
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
        text-align: center;
        display: block;
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