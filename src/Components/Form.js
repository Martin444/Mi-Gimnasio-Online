import React, { useState } from 'react'
import styled from 'styled-components'

export default function Form() {

    const [petPhotom, setPetPhoto] = useState([]);
    const [sendForm, setSendForm] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        
    }

    return (
        <Formu>
            <div className="Form">
            <div className="Form-head">
                <h2>Formulario para profesores</h2>
            </div>
            {sendForm && 
            <div className="Form-send">
                <span>Guardado con Exito!</span>
            </div>
            }
            {
                !sendForm &&
                <div className="Form-item">
                <form onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="¿Qué quieres enseñar?"/>
                    <input name="description" type="text" placeholder="¿Cómo te describirias?"/>
                    <input name="numberPhone" type="tel" placeholder="¿Cuál es tu número de teléfono?"/>
                    {/* <select name="type">
                        <option disabled selected>Seleccionar</option>
                        <option value="cat">Gato</option>
                        <option value="dog">Perro</option>
                    </select> */}

                    {/* <select name="gender">
                        <option disabled selected>Seleccionar</option>
                        <option value="female">Masculino</option>
                        <option value="male">Femenino</option>
                    </select> */}

                    {/* <select name="adopt">
                        <option disabled selected>Seleccionar</option>
                        <option value="true">Dar en adopción</option>
                        <option value="false">Cuidar</option>
                    </select> */}

                    {/* <input type="file" onChange={onChange} name="photo"/> */}

                    <button>Enviar</button>
                </form>
            </div>

            }  
        </div>
        </Formu>
    )
}

const Formu = styled.div`
    margin:auto;
    padding:20px;
    /* height: 100px; */
    width:300px;
    color: #242a30;
    border-radius: 30px;
    background: #fff;
/* 
    .Form {
        background-color: #fff;
        padding: 1em;
        display: block;
        width: 420px;
        position: relative;
    } */
.Form-head {
  display: flex;
  justify-content: space-between;
}
.Form-head h2 {
  margin: 0 0 .5em 0;
}
.Form-head i {
  font-size: 20px;
  cursor: pointer;
}
.Form select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.Form select {
  width: 100%;
  height: 38px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}
.Form input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  -webkit-box-shadow: 2px 3px 18px 1px rgba(101,101,102,1);
-moz-box-shadow: 2px 3px 18px 1px rgba(101,101,102,1);
box-shadow: 2px 3px 18px 1px rgba(101,101,102,1);
}
.Form button {
  width: 100%;
  background-image: linear-gradient(150deg, #4545f5, #37dcff);
  color: #fff;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}
`