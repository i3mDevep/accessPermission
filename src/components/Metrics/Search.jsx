import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      //width: '25ch',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      flexGrow: 1,
    },
  },
}));

const Search = ({ data = [], blocked = false, totalsCompanies = [], sendData }) => {
  const classes = useStyles();
  const handlerData = (event, newValue) => {
    console.log(newValue.id);    
    sendData({ data: newValue });
  };

  return (
    <>
      <Card className={classes.root} noValidate autoComplete='off'>
        <CardContent>
          <form className={classes.root}>
            <div>
              { blocked && !totalsCompanies.length && (
                <Alert severity='warning'>Debes tener por lo menos una sede creada</Alert>
              )}
              <Autocomplete
                disabled={blocked}
                freeSolo
                id='free-solo-2-demo'
                disableClearable
                onChange={handlerData}
                options={totalsCompanies}
                getOptionLabel={(option) => (option.namesubcompany ? option.namesubcompany : option)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Busque una sede'
                    margin='normal'
                    variant='outlined'
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />
            </div>
          </form>
        </CardContent>
      </Card>
      <br />
    </>
  );
};

export default Search;
