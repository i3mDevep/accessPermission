import React, { useState, forwardRef, useRef } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';
import DatePicker from 'react-datepicker';
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';
import ExportToExcelTrackingWorker from './ExportToExcelTrackingWorker';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
});

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

const StyledButton = withStyles({
  root: {
    color: '#fffff',
    background: '#004876 ',
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const WorkerTrackingCard = ({ title, description, image, isAuth, modalUpdate }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(() => {
    const dt = new Date();
    dt.setMonth(dt.getMonth() + 1);
    return dt;
  });

  const ref = React.createRef();
  const refExcel = useRef();

  const download = () => {
    refExcel.current.save();
  };

  const CustomeButtonCalendar = forwardRef(({ value, onClick, labeldate = 'Fecha de inicio' }, ref) => (
    <div style={{ display: 'block' }}>
      <span>{ labeldate }</span>
      <br />
      <StyledButton variant='contained' color='primary' onClick={onClick} ref={ref}>
        {value}
      </StyledButton>
    </div>

  ));
  const dayDiff = function (date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
  };
  const handlerStartDate = (date) => {
    setStartDate(date);
    const r = dayDiff(date, maxDate);
    if (r < 0) {
      // si la fecha incial supera la fecha final aumente un dia //
      const dt = maxDate;
      dt.setDate(dt.getDate() + Math.abs(r) + 1);
      setMaxDate(dt);
    }
    if (r > 31) {
      const dt = maxDate;
      dt.setDate(dt.getDate() - (Math.abs(r) - 31));
      setMaxDate(dt);
    }
  };
  const handlerFinalDate = (date) => {
    const r = dayDiff(startDate, date);
    if (r < 1) {
      alert('no es posible ingresar una fecha final menor que la de inicio !');
    } else if (r > 31) {
      alert('no es posible ingresar una fecha de diferencia mayor a 30 dias!');
    } else {
      setMaxDate(date);
    }
  };
  return (
    <ThemeProvider theme={theme}>
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
                if (isAuth.myplan !== 'Pro') {
                  modalUpdate();
                  return;
                }
                try {
                  const result = await fetch(`https://us-central1-coronavirus-control.cloudfunctions.net/apiReset/workerstracking?IdCompany=${isAuth.uid}&dateStart="${moment(startDate.toDateString()).format('l')}"&dateEnd="${moment(maxDate.toDateString()).format('l')}"`);
                  const res = await result.json();
                  setData(res.result);
                  download();
                  console.log(res);
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
        <div className='m-auto'>
          <div className='m-2 p-3'>
            <DatePicker
              selected={startDate}
              onChange={handlerStartDate}
              customInput={<CustomeButtonCalendar ref={ref} />}
            />
          </div>
          <div className='m-2 p-3'>
            <DatePicker
              selected={maxDate}
              onChange={handlerFinalDate}
              customInput={<CustomeButtonCalendar labeldate='Fecha final' ref={ref} />}
            />
          </div>
        </div>
        <ExportToExcelTrackingWorker data={data} ref={refExcel} />
      </Card>
    </ThemeProvider>
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateProps, null)(WorkerTrackingCard);
