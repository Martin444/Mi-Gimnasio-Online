/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
// Imagenes
import logo from '../images/LOGO.webp'
// Iconos
import {FaAlignRight} from 'react-icons/fa'

export default function Navbar (props) {


    const [isOpen, setIsOpen] = useState(false);

  const  handleToggle = () =>{
        setIsOpen(!isOpen);
    }

        return (
            <NavBar>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach resort" style={{maxHeight: "65px",minHeight: "20px", display: "flex" }}/>
                        </Link>
                        <button type="button" 
                        onClick={handleToggle}
                        className="nav-btn">
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/clases">Clases</Link>
                        </li>
                        <li>
                        <a onClick={props.showModal}>
                            Formulario para Profesores
                        </a>
                        </li>
                    </ul>
                </div>
            </NavBar>
        )
 
}

const NavBar = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0.75rem 0.20rem;
        background: linear-gradient(to top, rgba(42, 58, 64, 0.2), #343a40);
        z-index: 1;

        .nav-header {
            display: flex;
            justify-content: space-between;
            }

        .nav-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            outline: none;
            }
        .nav-icon {
            font-size: 1.5rem;
            color: #fff;
            }
        .nav-links {
            height: 0;
            overflow: hidden;
            transition: all 0.3s linear;
            list-style-type: none;
            }
            .nav-links a {
            display: block;
            text-decoration: none;
            padding: 1rem 0;
            color: #fff;
            transition: all 0.3s linear;
            text-align: center;
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 1px;

            }
            .nav-links a:hover {
            color: var(--primaryColor);
            cursor: pointer;
            }

            .show-nav {
            height: 150px;
            }

        @media screen and (min-width: 768px){
            .nav-btn {
                display: none;
            }
            .nav-center {
                max-width: 1170px;
                margin: 0 auto;
                display: flex;
            }
            .nav-links {
                height: auto;
                display: flex;
                /* margin-left: 4rem; */
            }
            .nav-links a {
                margin: 0 1rem;
                padding: 0.5rem 0;
            }
        }
`