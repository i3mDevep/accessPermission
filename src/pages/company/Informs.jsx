import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { WorkerCard, WorkerTrackingCard } from '../../components/InformsComponent';

const Informs = ({ isAuth }) => {
  if (isAuth.myplan !== 'Pro') {
    return (
      <Container fluid style={{ height: '100%', marginTop: '50px' }}>
        <Row style={{ alignItems: 'center' }}>
          <Col sm='12' md='5'>
            <img alt='error' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuyqYD1mVX44Xug2kzDgaP7O8rBE71t1HVUQ&usqp=CAU' />
          </Col>
          <Col sm='12' md='4'>
            <h1 style={{ fontSize: '2.0rem' }}>Lo sentimos :( esta opcion hace parte del plan PRO!</h1>
          </Col>
        </Row>
      </Container>
    ) ;
  }
  return (
    <Container fluid style={{ height: '100%', marginTop: '50px', overflow: 'hiden', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <WorkerCard title='Empleados registrados' description='empleados actuales' image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdlcGr4z9WmjGSyyAdTKq0JPRBP_slPFvxqA&usqp=CAU' />
      <WorkerTrackingCard title='Control empleados' description='seguimiento de empleados' image='https://www.constructshow.com/content/informa/construct-show/en/register/_jcr_content/par_page/column_control/par-col-1/column_control_12856/par-col-1/image.img.png/1559654426259.png' />
    </Container>
  );

};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateProps, null)(Informs);
