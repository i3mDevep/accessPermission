import React, { createContext, useState, useEffect } from 'react'
export const Context = createContext()

import firebase from 'firebase/app'
import 'firebase/auth';
import { myfirebaseConfig } from './credentials/firebase'
firebase.initializeApp(myfirebaseConfig);

function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        callback({loggedIn: true, email: user.email,update:false});
      } else {
        callback({loggedIn: false,update:false});
      }
    });
  }

const Provider = ({ children }) => {
  const [isAuth,setIsAuth] = useState({loggedIn: false, update: true})

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setIsAuth);
    return () => {
      unsubscribe();
    }
  }, []);

  const value = {
    isAuth,
    logout: () => {
      firebase.auth().signOut();
    },
    activateAuth: ( token ) => {
      setIsAuth(true)
    }
  }
  return (
    <Context.Provider value= { value }>
      { children }
    </Context.Provider>
  )
}
export default {
  Provider,
  Consumer: Context.Consumer
}