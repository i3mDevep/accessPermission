import React, {useContext} from 'react'
import { Toolbox } from '../../components/Toolbox'
import { Container } from './style'
import { Context } from '../../Context'
import { Redirect } from 'react-router-dom'
import { Workspace } from '../../components/Workspace'


export const Dashboard = () => {
    const { isAuth, logout } = useContext(Context)
    return(
      true ?
      <Container>
        <Toolbox />
        <Workspace />
      </Container>:<Redirect to="/login"/>
    )
}
