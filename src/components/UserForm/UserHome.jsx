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
import { Background } from './style';
import HeaderNavBar from '../LayoutUserForm/Header';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://www.ardobot.com/'>
        Ardobot Robótica SAS
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#f7f6f4',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
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
    backgroundColor: theme.palette.background.paper,
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
            <img className='w-100' alt='port' src='https://img.freepik.com/free-vector/qr-code-scanning_41910-348.jpg?size=626&ext=jpg' />
          </Col>
          <Col sm='12' md='6'>
            <Container className='p-5'>
              <h1 className='text-center p-2' style={{fontSize:'1.8rem'}}>
                ¿En que consiste?
              </h1>
              <Typography variant='h5' align='center' color='textSecondary' paragraph>
                Somos una plataforma tecnológica, de uso gratuito  que  te permite
                cumplir con el control de bioseguridad para tu negocio, reportes en
                Tiempo Real, y registro de temperatura de tus clientes y trabajadores
              </Typography>
              <Typography variant='caption' align='center' color='textSecondary' paragraph>
                *Aplican Terminos y Condiciones
              </Typography>
            </Container>
          </Col>
        </Row>

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container justify='center'>
            <Grid item>
              <Tooltip title='Add'>
                <Typography component='h1' variant='h3' align='center' color='textPrimary' gutterBottom>
                  Características
                </Typography>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Grid item xs={6}>
              <Tooltip title='Add' placement='left-start'>
                <SystemUpdateIcon background='blue' />
              </Tooltip>
              <br />
              <Tooltip title='Add' placement='left'>
                <Button>left</Button>
              </Tooltip>
              <br />
              <Tooltip title='Add' placement='left-end'>
                <Button>left-end</Button>
              </Tooltip>
            </Grid>
            <Grid item container xs={6} alignItems='flex-end' direction='column'>
              <Grid item>
                <Tooltip title='Add' placement='right-start'>
                  <Button>right-start</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Add' placement='right'>
                  <Button>right</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Add' placement='right-end'>
                  <Button>right-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Grid item>
              <Tooltip title='Add' placement='bottom-start'>
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip title='Add' placement='bottom'>
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip title='Add' placement='bottom-end'>
                <Button>bottom-end</Button>
              </Tooltip>
            </Grid>
          </Grid>

        </Container>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
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
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Desarrollado por:
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          En Ardobot queremos impulsar la innovación!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
      );
    </>
  );
};
export default UserHome;
