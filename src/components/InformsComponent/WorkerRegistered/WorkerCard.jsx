import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import 'react-datepicker/dist/react-datepicker.css';

import ExportToExcelWorker from './ExportToExcelWorker';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: '900px',
    margin: '10px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
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

const WorkerCard = ({ title, description, image, isAuth }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const refExcel = useRef();

  const download = () => {
    refExcel.current.save();
  };
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5'>
            {title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton
            aria-label='play/pause'
            onClick={async () => {
              try {
                const result = await fetch(`https://us-central1-coronavirus-control.cloudfunctions.net/apiReset/workersregistered?IdCompany=${isAuth.uid}`);
                const res = await result.json();
                setData(res.result);
                download();
                //console.log(res);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <GetAppIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title='Live from space album cover'
      />
      <ExportToExcelWorker data={data} ref={refExcel} />
    </Card>
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateProps, null)(WorkerCard);
