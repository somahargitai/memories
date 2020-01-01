import React, { useState, Fragment } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import useAxios from 'axios-hooks';
import PeopleTable from '../view/PeopleTable';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField, Paper } from '@material-ui/core/';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    width: 800,
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  ingrid: {
    marginTop: 20,
  },
  inputpaper: {
    margin: '0 auto',
    width: 1000,
    marginTop: 20,
    padding: 20,
  },
  datatable: {
    margin: '0 auto',
    width: 1200,
    marginTop: 20,
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
  },
}));

export const Person = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [deathPlace, setDeathPlace] = useState('');
  const [birthDate, setSelectedBirthDate] = useState(null);
  const [deathDate, setSelectedDeathDate] = useState(null);

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

  const uploadPerson = event => {
    event.preventDefault();
    executePost({
      data: {
        name: name,
        nick: nick,
        email: email,
        description: description,
        birthDate: birthDate,
        deathDate: deathDate,
        birthPlace: birthPlace,
        deathPlace: deathPlace,
        updatedAt: new Date().toISOString(),
      },
    });
  };

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
                      <TextField
                        onChange={e => setName(e.target.value)}
                        name="name"
                        fullWidth
                        id="standard-basic"
                        label="Név"
                      />
                      <TextField
                        onChange={e => setNick(e.target.value)}
                        name="nick"
                        fullWidth
                        id="standard-basic"
                        label="Becenév"
                      />
                      <TextField
                        name="description"
                        onChange={e => setDescription(e.target.value)}
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
                        onChange={e => setBirthPlace(e.target.value)}
                        name="bornlocation"
                        fullWidth
                        id="standard-basic"
                        label="Születés helye"
                      />
                      <KeyboardDatePicker
                        onChange={handleBirthDateChange}
                        fullWidth
                        margin="normal"
                        id="date-picker-dialog"
                        label="Születés ideje"
                        format="yyyy/MM/dd"
                        value={birthDate}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                      <TextField
                        onChange={e => setDeathPlace(e.target.value)}
                        fullWidth
                        id="standard-basic"
                        label="Halál helye"
                      />
                      <KeyboardDatePicker
                        onChange={handleDeathDateChange}
                        fullWidth
                        margin="normal"
                        id="date-picker-dialog"
                        label="Halál ideje"
                        format="yyyy/MM/dd"
                        value={deathDate}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
              </MuiPickersUtilsProvider>
              <Button
                onClick={uploadPerson}
                type="submit"
                label="Submit"
                className={classes.sendbutton}
                variant="contained"
              >
                Feltöltés
              </Button>
            </form>
          </Paper>
          <Paper key="tableeee" className={classes.datatable} elevation={3}>
            <PeopleTable />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Person;
