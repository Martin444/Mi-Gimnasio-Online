import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'


export default function Modal(props) {

    const ModalClass = classNames('Modal-wrapper', {
        showModal: props.show,
    })
    return (
        <Modale>
            <div className="Modal">
                {props.show && 
                <div className="Modal-overlay" onClick={props.close}/>
                }
                <div className={ModalClass}>
                    {props.children}
                </div>
            </div>
        </Modale>
    )
}

const Modale = styled.div`
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 20px;
    left: 14%;

    .Modal-wrapper {
        transition: all 0.8s;
        position: relative;
        z-index: 8;
        display: none;
        justify-content: center;
        align-items: center;
        top: -10px;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(-10%);
        opacity: 0;
        }
.Modal-wrapper.showModal {
  transform: translateY(30%);
  opacity: 1;
  top: -0px;
  justify-content: center;
  align-items: center;
  position: relative;
  display: block;
}
.Modal-overlay {
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  cursor: pointer;
}

@media screen and (min-width: 769px){

  .Modal{
    position: fixed;
    justify-content: center;
    align-items: cente;
    top: 20px;
    left: 40%;
  }
}
`