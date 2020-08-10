import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#ffffff',
    // padding: theme.spacing(8, 0, 6),
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
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    display: 'flex',

  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const CircleImage = ({ URL, title }) => {
  return (
    <Tooltip title={title} placement='right' style={{ width: '100%' }} >
      <Button style={{ borderRadius: '100%', width: '100%' }}>
        <img style={{ width: '100%' }} alt='imagecircle' src={URL} />
      </Button>
    </Tooltip>
  );
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const titles = [
  'Temperatúra.',
  'Empleados',
  'Nomina',
  'Clientes',
  'Informes',
  'Seguridad',
  'Descarga',
  'Sedes',
];

const texts = [
  'Registre la temperatura de clientes y empleados',
  'Gestione sus empleados por tipo de empleado, puesto de trabajo, lugar de trabajo, nivel salarial, etc.',
  'Calcule la nómina de sus empleados a partir del registro de entrada y salida.',
  'Creé su própia base de datos, categóricelos y tome medidas dependiendo el típo de público que lo visita, su departamento de marketing se lo agradecerá.',
  'Nuestro sistema está basado en bases de datos en tiempo real genere informes al instante con la información captada.',
  'Nuestro sistema capta el posicionamiento gps o registro fotográfico de sus empleados cuando se registran. ',
  'Nuesta App es de uso gratuito, compatible con dispositivos Android. (Próximamente Apple)',
  'Nuestra plataforma le permite gestionar diversas sedes o puntos de venta, usted podrá segmentar los empleados de cada uno de ellas.',
];

const links = [
  'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Ftemperatura.png?alt=media&token=e622475c-6ceb-4937-93a2-a0f0c911e127',
  'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fregistro.png?alt=media&token=a23f76b2-c093-4a0b-ae5c-4429c24829d8',
  'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fcuestionarios.png?alt=media&token=0201c4f5-5306-401e-989f-e16b523c1485',
  'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Flocalizacion.png?alt=media&token=1553e202-5134-45fe-be3d-04ddc368443b',
  'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Freloj.png?alt=media&token=a583adfa-3416-466f-9d64-f3f0e37ecc69',
  'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Falarma.png?alt=media&token=3beb929b-96c6-4259-9c5e-bebbc79b099b',
  'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fdescarga.png?alt=media&token=28f16383-851e-45ea-9e4f-86c827fd62ba',
  'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fcontrol%20de%20fechas.png?alt=media&token=8effece5-f9ef-430b-9215-877b2e8f035e'];

export default function UserHomeCards() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container>
          <Typography variant='h3' style={{ fontSize: '2.1875rem', color: '#172B4D' }} align='center' paragraph>
            Características
          </Typography>
        </Container>
        <Container className={classes.cardGrid}>
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card, i) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.root}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Grid container spacing={3}>
                        <Grid item xs={3}>
                          <CircleImage
                            className={classes.cardMedia}
                            URL={links[i]}
                            title={`${titles[i]}`}
                          />
                        </Grid>
                        <Grid item xs={9}>
                          <Typography align='left' component='h5' variant='h5'>
                            {`${titles[i]}`}
                          </Typography>
                          <Typography align='left' variant='body1' gutterBottom color='textSecondary'>
                            {`${texts[i]}`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
