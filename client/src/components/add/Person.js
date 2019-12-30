import React, { useState, Fragment } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import useAxios from 'axios-hooks';
import PeopleList from '../view/PeopleList';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  TextField,
  Paper,
} from '@material-ui/core/';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    width: 800,
    '& > *': {
      margin: theme.spacing(1),
      //  width: 200,
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: 200,
    },
  },
  // inputcontainer: {
  //   width: '1600px',
  // },
  ingrid: {
    marginTop: 20,
  },
  inputpaper: {
    margin: '0 auto',
    width: 1000,
    marginTop: 20,
    padding:20,
  },
  form: {
    flexGrow: 1,
    width: 800,
  },
  freetext: {
    '& > div': {
      width: '800px !important',
    },
  },
  sendbutton: {
    marginBottom: 20,
  }
}));

export const Person = () => {
  const classes = useStyles();

  const [value, setValue] = useState('Controlled');

  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const [selectedDeathDate, setSelectedDeathDate] = useState(
    new Date('2014-08-18T21:11:54'),
  );

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleBirthDateChange = date => {
    setSelectedBirthDate(date);
  };
  const handleDeathDateChange = date => {
    setSelectedDeathDate(date);
  };

  const [
    { data: postData, loading: postLoading, error: postError },
    executePost,
  ] = useAxios(
    {
      url: 'http://localhost:5001/personadd',
      method: 'POST',
    },
    { manual: true },
  );

  const uploadThis = {
    name: 'Kogutowicz Peter',
    nick: 'Manó',
    birth: '1988-08-08',
    birthPlace: 'Budapest',
    email: 'mano@mano.com',
  };

  const uploadPerson = () => {
    executePost({
      data: {
        ...uploadThis,
        updatedAt: new Date().toISOString(),
      },
    });
  };
  // // className={classes.form}>
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid className={classes.ingrid} item xs={12}>
          <Paper className={classes.inputpaper} elevation={3}>
            <form className={classes.root} noValidate autoComplete="off">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div>
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <TextField fullWidth id="standard-basic" label="Név" />
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label="Becenév"
                      />
                      <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Leírás"
                        multiline
                        rows="4"
                        defaultValue=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label="Születés helye"
                      />
                      <KeyboardDatePicker
                        fullWidth
                        margin="normal"
                        id="date-picker-dialog"
                        label="Születés ideje"
                        format="yyyy/MM/dd"
                        value={selectedDeathDate}
                        onChange={handleDeathDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label="Halál helye"
                      />
                      <KeyboardDatePicker
                        fullWidth
                        margin="normal"
                        id="date-picker-dialog"
                        label="Halál ideje"
                        format="yyyy/MM/dd"
                        value={selectedBirthDate}
                        onChange={handleBirthDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
              </MuiPickersUtilsProvider>
            </form>
            <Button onClick={uploadPerson} className={classes.sendbutton} variant="contained"> Feltöltés </Button>
          </Paper>
          <Paper className={classes.inputpaper} elevation={3}>
          <PeopleList />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Person;
