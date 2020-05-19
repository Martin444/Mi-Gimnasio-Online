import React from 'react'

import styled from 'styled-components'
import { connect } from 'react-redux'
import { database } from '../Utils/firebase'

 function CardClass(props) {

    const handleBuy = () =>{
        const newDate = new Date().toISOString();

        const data = {
            'date' : newDate,
            'nameClase': props.title,
            'profilePic':props.user.photoURL,
            'userContact': props.user.email,
            'userInterest': props.user.displayName,
        }

        database.ref('buys').push(data)
    }

    return (
        <DivCard>
            <img src={props.image}  alt="Foto del card"/>
                <h2>{props.title}</h2>
                {
                    props.login ?
                    <a href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=132871041-c0f935a0-560d-4c03-a72b-438c11fb158f" target="_blanck"><button className="btn-primary" onClick={handleBuy}>Comprar</button></a>
                    :
                    <button className="btn-primary" onClick={props.close}>Comprar</button>

                }
        </DivCard>
    )
}



const DivCard = styled.div`
    width: 250px;
    height: 420px;
    background: #fff;
    margin-left: 15%;
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
        background-size: contain;
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
const mapStateToProps = state => {
    return {
        login: state.login,
        user: state.user
    }
}

export default connect(mapStateToProps)(CardClass);