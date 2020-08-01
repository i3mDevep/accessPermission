import React from 'react';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import { Row, Col } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Background } from './style';
import HeaderNavBar from '../LayoutUserForm/Header';
import './userhome.scss';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#1b6ca8',
    padding: theme.spacing(4, 0, 6),
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const UserHome = () => {
  const classes = useStyles();

  return (
    <>
      <Background>
        <HeaderNavBar />
      </Background>
      <main>
        {/* Hero unit */}
        <Row className={classes.heroContent}>
          <Col sm='12' md='5'>
            <img className='w-75' style={{ maxWidth: '500px', position: 'absolute' }} alt='port' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2F5.png?alt=media&token=520496b5-3dfc-43f7-972c-41b1015de39d' />
          </Col>
          <Col sm='12' md='6'>
            <Container className='p-5 container_user_home'>
              <h1 className='text-center p-2' style={{ fontSize: '1.8rem' }}>
                ¿En que consiste?
              </h1>
              <Typography variant='h5' style={{ fontSize: '1.2rem', padding: '20px' }} align='center' paragraph>
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
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', alignContent:'center', padding:'50px' }}>
            <Grid item container xs={6} alignItems='flex-end' direction='column'>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Finformes.png?alt=media&token=018395b1-95e5-41d9-aa81-3f5ed0966aa2' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Flocalizacion.png?alt=media&token=3609f498-2843-4d88-be2c-dbfd21d9db82' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fregistro.png?alt=media&token=585004ab-b58f-42a2-a75d-9058bcca2094' />
              </Grid>
            </Grid>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', alignContent:'center', padding:'50px' }}>
            <Grid item xs={6} alignItems='flex-end' direction='row'>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fregistro.png?alt=media&token=585004ab-b58f-42a2-a75d-9058bcca2094' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fcontrol%20de%20fechas.png?alt=media&token=76896c86-09ee-4941-8ee0-be83760aaac8' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fdescarga.png?alt=media&token=58d884c6-502e-45ae-a908-c8a58ee0c93a' />
              </Grid>
            </Grid>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img alt='sdas' style={{ width: '75%', minWidth:'400px', objectFit:'cover' }} src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2F3.png?alt=media&token=532e76cc-70e2-4d1a-be4f-c3eeb3dae3a9' />
          </Col>
        </Row>
        {/* <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Row>
          <Col sm='12' md='4' style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.4rem', color: 'white' }}>Powered by</h4>
            <br />
            <FaReact size={100} color='white' />
          </Col>
          <Col sm='12' md='4'style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.4rem', color: 'white' }}>Developed with</h4>
            <br />
            <img alt='logo' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fardobot_logo.png?alt=media&token=6249da59-eaa5-4ea6-a655-9c4932d11b7c' />
          </Col>
          <Col sm='12' md='4' style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.4rem', color: 'white' }}>Support in</h4>
            <br />
            <img style={{ height: '100px' }} alt='firebase' src='https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png?hl=es-419' />
          </Col>
        </Row>
      </footer>
      {/* End footer */}
    </>
  );
};

const CircleImage = ({ URL, title }) => {
  return (
    <Tooltip title={title} placement='left-end'>
      <Button style={{ borderRadius: '100%' }}>
        <img style={{ width: '100px' }} alt='imagecircle' src={URL} />
      </Button>
    </Tooltip>
  );
};
export default UserHome;
