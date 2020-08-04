import React from 'react';
import { Button, Card, Container, Form, Row, Col, ListGroup, Alert } from 'react-bootstrap';

import CameraIcon from '@material-ui/icons/PhotoCamera';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import { FaReact } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent1: {
    backgroundColor: 'white',
    //padding: theme.spacing(0, 0, 0, 0),
  },
  heroContent: {
    backgroundColor: '#1b6ca8',
    //padding: theme.spacing(5, 0, 10, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#004876',
    padding: theme.spacing(6),
  },
}));

const CommingSoon = () => {
  const classes = useStyles();

  return (
    <Container>
      <Row>
        <Col xs='6'>
          <img alt='port' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fcomming%20soon.jpg?alt=media&token=7ad05b95-9d8f-4540-b5fa-aed67f03efd0' />
        </Col>
        <Col  xs='6'>
          <Container >
            <h1 className='text-center p-2' style={{ fontSize: '1.8rem' }}>
              ¿En que consiste?
            </h1>
            <Typography variant='h5' style={{ fontSize: '1.2rem' }} align='center' paragraph>
              Somos una plataforma tecnológica, de uso gratuito  que  te permite
              cumplir con el control de bioseguridad para tu negocio, reportes en
              Tiempo Real, y registro de temperatura de tus clientes y trabajadores
            </Typography>
            <Typography variant='caption' align='center' paragraph>
              *Aplican Terminos y Condiciones
            </Typography>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CommingSoon;

