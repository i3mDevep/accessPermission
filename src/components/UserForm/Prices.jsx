import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
//simport Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },

  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Gratis',
    price: '0',
    description: ['Diseñado para personas o empresas que tienen 1 solo punto de atención y 200 registro de entrada y salida mensuales.'],
    buttonText: 'Registrese Ahora',
    buttonVariant: 'outlined',
    data: '/register',
  },
  {
    title: 'Pro',
    subheader: 'Popular',
    price: '50.000',
    description: ['Diseñado para empresas que tienen de 1 a 5 puntos de venta, acceso total a todos los módulos, ofrecemos acompañamiento de uso e implementación de la plataforma.'],
    buttonText: 'Registrese Ahora',
    buttonVariant: 'contained',
    data: '/register',
  },
  {
    title: 'Empresas',
    price: '30.000',
    description: ['Diseñado para empresas que tienen mas de 5 puntos de venta, precio ofertado por volumen'],
    buttonText: 'Registrese Ahora',
    buttonVariant: 'outlined',
    data: '/register',
  },
];

export default function Prices() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component='h2' variant='h3' color='textPrimary'>
                      $
                      {tier.price}
                    </Typography>
                    <Typography variant='h6' color='textSecondary'>
                      /mes
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component='li' variant='subtitle1' align='center' key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Link to={tier.data}>
                    <div className='text-center'>
                      <Button fullWidth variant={tier.buttonVariant} href={tier.data} color='primary'>
                        {tier.buttonText}
                      </Button>
                    </div>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
