import React, {useState} from 'react'
import styled from 'styled-components'
import Nov from '../images/banner1.jpg'
import fit from '../images/fit1.svg'
import FristPlan from '../Views/FristPlan'
import Modal from '../Components/Modal'

import Login from '../Components/Login'

import { connect } from 'react-redux'
import Form from '../Components/Form'

 function Home(props) {

    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            <Modal show={modal} close={showModal}>
                {
                    props.login ?
                    <Form/>
                    :
                    <Login/>
                }
            </Modal>
            <DivHome>
                <div className="boar">
                    <img src={fit} alt="Beach resort" className="image"/>
                    <div className="content">
                        <h1>Mi Gimnasio Online</h1>
                        <p>La nueva forma de mejorar tus entrenamientos desde tu casa con profecionales</p>
                        {
                            props.login ?
                            <a href="https://www.facebook.com/" target="_blank"> <button className="btn-primary">Contactar</button></a>
                            :
                            <button className="btn-primary" onClick={showModal}>Registrarme</button>
                        }
                    </div>
                </div>
            </DivHome>
            <FristPlan/>
        </div>
        
    )
}

const DivHome = styled.div`
    margin:0;
    padding: auto;
    align-content:center;
    display: block;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 669px;
    background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.45), #343a40), url(${Nov});
    background-size: cover no-repeat;

    .boar{
        padding-top: 1pc;
    }

    .content{
        width: 100%;
        /* height: 669px; */
        align-self: center;
        align-content: center;
        /* margin-right: 150px; */
        padding: 0px;
        text-align: center;
    }

    .content h1{
        color: #fff;
        /* margin-right: 5pc; */
    }

    .content p{
        color:#fff;
        /* margin-right: 1pc; */
    }

    .image{
        width: 65%;
        display: block;
        margin-left: 20%;
        margin-top: 10pc;
        align-items:center;
        align-self: center;
    }

    .btn-primary {
        width: 234px;
        height: 42px;
        border: none;
        /* margin-right: 1pc; */
        border-radius: 50px;
        background-color:#E6212F;
        font-size: 16 px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #ffffff;
        cursor: pointer;
    }

    @media screen and (min-width: 768px){
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        display: inline-block;
        flex: block;

        .boar{
            padding-top: 0;
            display: flex;
        }

        .content{
            /* height: 669px; */
            /* margin-right: 50px; */
            padding: 0px;
            text-align: right;
        }

        .content h1{
                color: #fff;
                margin-right: 5pc;
            }

            .content p{
                color:#fff;
                margin-right: 5pc;
            }

            .image{
                width: 45%;
                display: block;
                margin-left: 5pc;
            }

            .btn-primary {
                width: 134px;
                height: 42px;
                border: none;
                margin-right: 5pc;
                border-radius: 50px;
                background-color:#E6212F;
                font-size: 16 px;
                font-weight: bold;
                letter-spacing: 1px;
                color: #ffffff;
                cursor: pointer;
            }
    }
`

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Home);