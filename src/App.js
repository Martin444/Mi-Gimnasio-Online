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
      }
    });
  })
  return (
    <div className="App">
        <Navbar showModal={showModal}/>
        <Modal show={modal} close={showModal}>
                        <Login/>
                    </Modal>
          <Switch>
            <Route exact path= "/" component={Home} props={showModal}/>
            <Route exact path= "/clases" component={Classes}/>
          </Switch>
        <Footer/>
    </div>
  );
}

const mapDispatchToProps = {
  setLogin,
  setUser,
}

export default connect(null, mapDispatchToProps)(App);
