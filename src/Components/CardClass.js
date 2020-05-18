import React from 'react'

import styled from 'styled-components'

export default function CardClass({title, image, onChannge}) {
    return (
        <DivCard>
            <img src={image}  alt="Foto del card"/>
                <h2>{title}</h2>
            <button className="btn-primary" onClick={onChannge}>Comprar</button>
        </DivCard>
    )
}



const DivCard = styled.div`
    width: 350px;
    height: 420px;
    background: #fff;
    margin-left: 19%;
    margin-top: 10%;
    border-radius: 30px;
    -webkit-box-shadow: 3px 6px 45px -6px rgba(0,0,0,0.65);
    -moz-box-shadow: 3px 6px 45px -6px rgba(0,0,0,0.65);
    box-shadow: 3px 6px 45px -6px rgba(0,0,0,0.65);

    h2{
        color: #2c2b3d;
    }

    img{
        width:100%;
        height: 250px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }

    .btn-primary {
        width: 174px;
        height: 42px;
        border: none;
        margin-bottom: 12px;
        border-radius: 10px;
        background-color:#E6212F;
        font-size: 16 px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #ffffff;
        cursor: pointer;
    }

    @media screen and (min-width: 768px){
        width: 400px;
        margin-top: 0%;
        margin-left: 7%;
        margin-right: 7%;
    }
`
