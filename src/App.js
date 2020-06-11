import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import {Route, Switch} from 'react-router-dom'
import Classes from './Pages/Classes';
import Home from './Pages/Home'
import { auth } from './Utils/firebase'
import { setUser, setLogin } from './actions/index'
import { connect } from 'react-redux'
import Modal from './Components/Modal'


import Login from './Components/Login'
import Form from './Components/Form';

function App(props) {

  const [modal, setModal] = useState(false);

  const showModal = () => {
      setModal(!modal)
  }

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user);
        props.setLogin(true);
        console.log(user)
      }
    });
  })
  return (
 
        <div className="App">
                  <Navbar showModal={showModal}/>
              <Modal show={modal} close={showModal}>
                {
                    props.login ? 
                      <Form/>
                      :
                      <Login close={showModal}/>
                }
              </Modal>
              <Switch>
                <Route exact path= "/" component={Home} props={showModal}/>
                <Route exact path= "/clases" component={Classes} props={showModal}/>
              </Switch>
            <Footer/>
        </div>

  );
}

const mapDispatchToProps = {
  setLogin,
  setUser,
}

const mapStateToProps = state => {
  return {
      login: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
