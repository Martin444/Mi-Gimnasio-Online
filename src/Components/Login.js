import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { auth, provider, firestore } from '../Utils/firebase';
import { setUser, setLogin } from '../actions/index';
import { Link, withRouter } from 'react-router-dom'

// Funcion que me traiga las credenciales de Email y contraseña de Firebase
// Guardar esos datos en Firestore

function Login(props) {

    const loginGoogle = () => {
        
        auth().signInWithPopup(provider)
          .then(({ user }) => {
            const newDate = new Date().toISOString();

        const data = {
           'date': newDate,
           'displayName' : user.displayName,
           'email' : user.email,
           'photoUrl' : user.photoURL,
           'numberPhone' : user.phoneNumber
        }

        firestore.collection("users").doc(user.uid).set(data)
            .then(() =>{
                props.setUser(user);
                props.setLogin(true);
                props.history.push('/clases');
            })

            // Aqui le vamos a agregar el registro a la base de datos
          })
          .catch((e)=> console.log(e))
      }

      const logEmailAndPass = (event) =>{
        event.preventDefault();
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();

        auth().signInWithEmailAndPassword(form.get('email'), form.get('pass')).then(({ user })=>{
            console.log(user);
            const data = {
                'date': newDate,
                'displayName' : user.displayName,
                'email' : user.email,
                'photoUrl' : user.photoURL,
                'numberPhone' : user.phoneNumber
             }
             firestore.collection("users").doc(user.uid).set(data)
            .then(() =>{
                props.setUser(user);
                props.setLogin(true);
                props.history.push('/clases');
            })
        })
      }

    return (
        <DivLogin>
            <h4>Que bueno que quieras ser parte de la Familia</h4>
            <form onSubmit={logEmailAndPass}>
                <input name="email" placeholder='Email' type='email'></input>
                <input name="pass" placeholder='Contraseña' type='password'></input>

                <button className='btn-primary'>Loguearme</button>
            </form>
                <span className='registar'>¿No tienes una cuenta? <Link to='/registro' ><h3>Registrate</h3></Link></span>
                {/* Aqui tenes que poner los inputs para el registro (Nombre, Apellido, email, contraseña) */}
            {/* <button className="btn-primary"><i class="fab fa-google" style={{fontSize:'14px', marginRight:'5px', marginTop:'4px'}}></i>iniciar con google</button> */}
            <button onClick={loginGoogle} className="btn-social"><i class="fab fa-facebook-f" style={{fontSize:'14px', marginRight:'5px', marginTop:'4px'}}></i>iniciar con Google</button>
        </DivLogin>
    )
}

const DivLogin = styled.div`
    margin:auto;
    padding:20px;
    display: block;
    direction: vertical;
    align-items: center;
    align-content:center;
    width:300px;
    border-radius: 20px;
        background: #fff;
        color: #fff;
    h4{
        color: grey;
    }
    input{
        width: 30vh;
        height: 30px;
        text-align: left;
        margin-bottom: 12px;
        padding: 5px;
        /* padding-left: 20px; */
        border: none;
        border-radius: 30px;
        font-size: 16px;
        font-weight: bold;
        background: #f2f2f2;
        box-shadow:  20px 20px 60px #cecece, 
                    -20px -20px 60px #ffffff;
        background: #ccc;
        color: #242a30;
    }

    .registar{
        color: #242a30;
        margin: 15px;
    }

    .btn-primary{
        width: 30vh;
        height: 32px;
        margin: 5px;
        border: none;
        border-radius: 50px;
        background-color: #3cd458;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }

    .btn-social{
        width: 30vh;
        height: 32px;
        margin: 5px;
        border: none;
        border-radius: 50px;
        background-color: #23599d;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }
`


const mapDispatchToProps = {
    setUser,
    setLogin,
  }
  
  export default withRouter(connect(null, mapDispatchToProps)(Login));