import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
//import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Button, Card, Container, Modal, Form, Row, Col, Alert, CardDeck } from 'react-bootstrap';
import { showAlert } from '../../store/actions/sweetAlertActions';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';
import useInputValue from '../../hooks/useInputValue';

const AuthPointAttention = ({ init, visibleAlert, worker, isAuth, showAlert, sedes = [] }) => {

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [value, setValue] = useState(new Date());
  const [Sede, setSede] = useState({ value: '', id: '' });

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  const h = value.getHours();
  const m = value.getMinutes();
  const s = value.getSeconds();

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    showAlert({
      type: 'success',
      title: 'Good!',
      content: 'Registro Exitoso',
      timeout: 3000,
      showCancel: false,
    });
  }, [webcamRef, setImgSrc]);

  const useStyles = makeStyles({
    root: {

    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (

    <Container fluid>
      <Row>
        {visibleAlert && <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>}
        <Col sm={10} md={6} style={{ margin: '0 auto' }}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Hora de Registro
              </Typography>
              <Webcam
                className='embed-responsive embed-responsive-16by9'
                audio={false}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                text='img'
                controls
              />
              <Typography variant='body2' color='textSecondary' component='p'>
                {h % 12}
                :
                {(m < 10 ? `0${m}` : m)}
                :
                {(s < 10 ? `0${s}` : s)}
                {' '}
                {h < 12 ? 'am' : 'pm'}
              </Typography>
              <br />
              <Button className='primary' onClick={capture}>Registrar</Button>
            </CardContent>
          </Card>
          <br />
        </Col>
        <br />
        <Col sm={10} md={6} style={{ margin: '0 auto' }}>
          <Card>
            <CardContent>
              <Form>
                <Form.Group controlId='Identification'>
                  <Form.Label>Seleccione su documento</Form.Label>
                  <Form.Control
                    as='select'
                    value={Sede.value}
                    onChange={(e) => {
                      const index = e.target.selectedIndex;
                      setSede({ value: e.target.value, id: e.target.options[index].id });
                    }}
                  >
                    <option>Seleccione una sede o Lugar de trabajo</option>
                    {
                      sedes.map((subCompany) => <option id={subCompany.id} key={`id-${subCompany.id}`}>{subCompany.namesubcompany}</option>)
                    }
                  </Form.Control>
                </Form.Group>
              </Form>
            </CardContent>
          </Card>
          <br />
          <Card>
            <CardContent>
              <Form>
                <Form.Group controlId='Name'>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    placeholder='Nombre'
                    required
                    disabled={true}
                  />
                </Form.Group>
                <Form.Group controlId='LastName'>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    placeholder='Apellido'
                    required
                    disabled={true}
                  />
                </Form.Group>
              </Form>
            </CardContent>
          </Card>
          <br />

          {imgSrc && (
            <Card className='text-center'>
              <Card.Body>
                <img
                  alt='webcam'
                  text='name'
                  className={classes.media}
                  src={imgSrc}
                />
              </Card.Body>
            </Card>
          )}

        </Col>
      </Row>
    </Container>
  );
};

AuthPointAttention.propTypes = {
  visibleAlert: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (alertProps) => dispatch(showAlert(alertProps)),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    visibleAlert: getVisibleAlert(state.notifications),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPointAttention);
