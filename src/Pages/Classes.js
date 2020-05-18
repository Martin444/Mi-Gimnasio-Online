import React from 'react'
import styled from 'styled-components'
import Nov from '../images/banner1.jpg'
import CardClass from '../Components/CardClass'
import Pesas from '../images/pesas1.jpg'
import Clasesmix from '../images/clasemix.webp'
import Ritmos from '../images/ritmos.jpg'
import ZumbaFit from '../images/zumbafit.jpg'
import Tabata from '../images/tabata.jpg'
import ZumbaGold from '../images/zumbagold.jpg'
import Gap from '../images/gap.webp'
import Pilates from '../images/pilates1.jpg'
import Circuito from '../images/circuito.jpg'
import Personal from '../images/personal.jpg'
import Latino from '../images/latino.webp'
import Circuito2 from '../images/circuito2.webp'
import Rutina from '../images/rutina.webp'
import Ritmos2 from '../images/ritmos2.jpg'
import Ritmos3 from '../images/ritmos3.webp'
import Esfera from '../images/esfera.webp'
import { connect } from 'react-redux'


function Classes(props) {

    const  handleClick = () => {
        console.log("Hola");
    };

    return (
        <div>
            <DivClases>
                {
                    props.login ?
                    <h1>Hola {props.user.displayName}! Que bueno verte</h1>
                    :
                    <h1>Mira todas las clases que tenemos para ti</h1>
                }
                 <div  className="class-items">
                 <CardClass title="CLASES MIX" image={Clasesmix} onChannge={handleClick}/>
                    <CardClass title="RITMOS" image={Ritmos} onChannge={handleClick}/>
                    <CardClass title="ZUMBA FITNESS" image={ZumbaFit} onChannge={handleClick}/>
                 </div>
                 <div  className="class-items">
                 <CardClass title="TABATA" image={Tabata} onChannge={handleClick}/>
                    <CardClass title="ZUMBA GOLD" image={ZumbaGold} onChannge={handleClick}/>
                    <CardClass title="G.A.P LOCAL" image={Gap} onChannge={handleClick}/>
                 </div>
                 {
                     props.login ?
                     <div  className="class-items">
                        <CardClass title="PILATES MAT" image={Pilates} onChannge={handleClick}/>
                        <CardClass title="CIRCUITO DE FUERZA" image={Circuito} onChannge={handleClick}/>
                        <CardClass title="PERSONAL TRAINER" image={Personal} onChannge={handleClick}/>
                        <CardClass title="LATINO" image={Latino} onChannge={handleClick}/>
                        <CardClass title="CIRCUITO INTERMITENTE" image={Circuito2} onChannge={handleClick}/>
                        <CardClass title="RUTINAS 100%" image={Rutina} onChannge={handleClick}/>
                        <CardClass title="RITMOS LATINOS" image={Ritmos2} onChannge={handleClick}/>
                        <CardClass title="RITMOS FIT ROTATIVOS" image={Ritmos3} onChannge={handleClick}/>
                        <CardClass title="ESFERODINAMIA" image={Esfera} onChannge={handleClick}/>
                    </div>
                        
                    :
                    <button className="btn-primary">Ver más</button>
                 }
                 
            </DivClases>
        </div>
    )
}


const DivClases = styled.div`
    margin:0;
    padding: auto;
    align-content:center;
    display: block;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: wrap;
    background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.45), #343a40), url(${Nov});
    background-size: cover;


    h1{
        margin:0;
        color: #fff;
        padding-top: 100px;
    }

    .class-items{
        display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 1em;
            grid-row-gap: 2em;
            padding-bottom: 20px;
    }

    .btn-primary {
        width: 174px;
        height: 42px;
        border: none;
        margin-bottom: 42px;
        margin-top: 22px;
        border-radius: 10px;
        background-color:#E6212F;
        font-size: 16 px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #ffffff;
        cursor: pointer;
    }

    @media screen and (min-width: 769px){
        .class-items{
            margin-top: 30px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1em;
            grid-row-gap: 2em;
        }
    }
`

const mapStateToProps = state => {
    return {
        login: state.login,
        user: state.user,
    };
};

export default connect(mapStateToProps)(Classes);