import React from 'react'
import styled from 'styled-components'
import { auth, firestore } from '../Utils/firebase';
import { setUser, setLogin } from '../actions/index';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

function Registro(props) {

    

    const registrarData = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();

        auth().createUserWithEmailAndPassword(form.get('email'), form.get('password'))
            .then(({ user })=>{
                const data = {
                    'date': newDate,
                    'uid': user.uid,
                    'name' : form.get('name'),
                    'email' : user.email,
                    'photoURL' : 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                    'numberPhone' : user.phoneNumber
                 }

                 firestore.collection("users").doc(user.uid).set(data)
                    .then(() =>{
                        props.setUser(user);
                        props.setLogin(true);
                        props.history.push('/clases');
                    })

            });
    }

    return (
        <Container>
            <div className='conten'>
                <h1>Registrate para comenzar a ver las clases</h1>
                <form onSubmit={registrarData}>
                    <input name='name' placeholder='Nombre'></input>
                    <input name='lastname' placeholder='Apellido'></input>
                    <input name='email' placeholder='Email' type='email'></input>
                    <input name='password' placeholder='Contraseña' type='password'></input>
                    <button className='btn-primary'>Registrar</button>
                </form>
            </div>
        </Container>
    )
}


const Container = styled.div`
    height: 100vh;
    background-color:  #242a30;
    align-items: center;
    display: flex;
    justify-content: center;
    margin:auto;
    padding:auto;
    color:#fff;
    

    .conten{
        width:  50vh;
        position: absolute;
        flex-direction: horizontal;
    }

    input{
        width: 100%;
        height: 40px;
        text-align: left;
        margin-bottom: 22px;
        padding: 5px;
        /* padding-left: 20px; */
        border: none;
        border-radius: 10px;
        font-size: 19px;
        font-weight: bold;
        background: #f2f2f2;
        box-shadow:  1px 2px 6px #cecece, 
                    -1px -2px 6px #242a30;
        background: #ccc;
        color: #242a30;
        border: none;
    }
    .btn-primary {
        width: 103%;
        border: none;
        height: 42px;
        /* margin-right: 1pc; */
        border-radius: 10px;
        background-color:#E6212F;
        font-size: 16 px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #ffffff;
        cursor: pointer;
    }

`


const mapDispatchToProps = {
    setUser,
    setLogin,
  }
  
  export default withRouter(connect(null, mapDispatchToProps)(Registro));