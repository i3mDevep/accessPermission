import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import 'moment-timezone';

const AuthPointAttention = () => {
  const dateToFormat = '1976-04-19T12:59-0500';
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [value, setValue] = useState(new Date());

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
  }, [webcamRef, setImgSrc]);

  const useStyles = makeStyles({
    root: {

    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Webcam
            width='500'
            height='600'
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
          />
          <CardActions>
            <Button className='primary' onClick={capture}>Capture photo</Button>
          </CardActions>
          {imgSrc && (
            <img
              text='name'
              className={classes.media}
              src={imgSrc}
            />
          )}
          <h1>
            {h % 12}
            :
            {(m < 10 ? `0${m}` : m)}
            :
            {(s < 10 ? `0${s}` : s)}
            {' '}
            {h < 12 ? 'am' : 'pm'}
          </h1>
        </CardContent>
      </Card>
    </>
  );
};

export default AuthPointAttention;
