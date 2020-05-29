import React, {useContext} from 'react'
import { Toolbox } from '../../components/Toolbox'
import { Graphics } from '../../components/Graphics'
import { Container, BodyCenter, Search, ContainerTable } from './style'
import { ListBoxInformation } from '../../components/ListBoxInformation'
import { TableData } from '../../components/TableData'
import { Context } from '../../Context'
import { Redirect } from 'react-router-dom'


export const Dashboard = () => {
    const { isAuth, logout } = useContext(Context)
    return(
      isAuth.loggedIn ?
      <Container>
        <button onClick={()=>logout()}>close session</button>
        <Toolbox />
        <div style = {{width:"100%"}}>
          <ListBoxInformation />
          <BodyCenter>
              <Graphics />
              <ContainerTable>
                <Search placeholder="Search Identification"/>
                <TableData />
              </ContainerTable>
          </BodyCenter>
        </div>
      </Container>:<Redirect to="/login"/>
    )
}

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAzRlAm770pzgH3mERHYd9wt4ByvMo3w8",
    authDomain: "controlaccess-226cb.firebaseapp.com",
    databaseURL: "https://controlaccess-226cb.firebaseio.com",
    projectId: "controlaccess-226cb",
    storageBucket: "controlaccess-226cb.appspot.com",
    messagingSenderId: "909626516622",
    appId: "1:909626516622:web:255b5e6a7a5b7d1a14d5df",
    measurementId: "G-9TBMYLFSJG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/