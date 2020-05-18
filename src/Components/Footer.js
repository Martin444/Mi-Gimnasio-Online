import React from 'react'
import styled from 'styled-components'
import {IoLogoWhatsapp} from 'react-icons/all'
import {AiFillFacebook} from 'react-icons/all'
import {AiFillInstagram} from 'react-icons/all'


export default function Footer() {
    return (
        <DivFooter>
            <h1>Contactanos</h1>
            <div className="btns-social">
                <button className="btn-primary-wpp"><IoLogoWhatsapp className="nav-icon"/></button>
                <button className="btn-primary-fb"><AiFillFacebook className="nav-icon"/></button>
                <button className="btn-primary-ing"><AiFillInstagram className="nav-icon"/></button>
            </div>
        </DivFooter>
    )
}


const DivFooter = styled.div`
    width: 100%;
    height: 200px;
    background: #343a40;

    h1{
        margin: 0;
        color: #fff;
    }

    .btns-social{
        margin-top: 20px;
        width: 100%;
        align-items: space-beetwen;
    }

    .nav-icon {
            font-size: 1.5rem;
            color: #fff;
            margin-top: 10px;
            }

     .btn-primary-wpp {
        margin: auto;
        /* width: 274px; */
        height: 40px;
        border: none;
        /* margin-bottom: 12px; */
        border-radius: 10px;
        background-color:#075E54;
        font-size: 16 px;
        text-align:center;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }

    .btn-primary-fb {
        margin: auto;
        /* width: 274px; */
        height: 40px;
        border: none;
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 10px;
        background-color: #3b5998;
        font-size: 16 px;
        text-align:center;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }


    .btn-primary-ing {
        margin: auto;
        /* width: 274px; */
        height: 40px;
        border: none;
        /* margin-bottom: 12px; */
        border-radius: 10px;
        background-color: #E1306C;
        font-size: 16 px;
        text-align:center;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }

`