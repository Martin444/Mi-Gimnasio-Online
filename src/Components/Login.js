import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { auth, provider, firestore } from '../Utils/firebase';
import { setUser, setLogin } from '../actions/index';
import { withRouter } from 'react-router-dom'

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


            props.close();
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

    return (
        <DivLogin>
            <h4>Que bueno que quieras ser parte de la Familia</h4>
            {/* <button className="btn-primary"><i class="fab fa-google" style={{fontSize:'14px', marginRight:'5px', marginTop:'4px'}}></i>iniciar con google</button> */}
            <button onClick={loginGoogle} className="btn-social"><i class="fab fa-facebook-f" style={{fontSize:'14px', marginRight:'5px', marginTop:'4px'}}></i>iniciar con Google</button>
        </DivLogin>
    )
}

const DivLogin = styled.div`
    margin:auto;
    padding:20px;
    /* height: 100px; */
    width:300px;
    color: #242a30;
    border-radius: 30px;
        background: #fff;
        color: #fff;
    h4{
        color: grey;
    }
    input{
        width: 100%;
        text-align: left;
        margin: 5px;
        padding: 5px;
        /* padding-left: 20px; */
        border: none;
        border-radius: 50px;
        background: #242a30;
        color: #fff;
    }

    .btn-primary{
        width: 100%;
        margin: 5px;
        height: 32px;
        border: none;
        border-radius: 50px;
        background-color: #3cd458;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }

    .btn-social{
        width: 100%;
        margin: 5px;
        height: 32px;
        border: none;
        border-radius: 50px;
        background-color: #23599d;
        font-family: Poppins;
        font-size: 14px;
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