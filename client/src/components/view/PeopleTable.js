import React, { Fragment } from 'react';
import useAxios from 'axios-hooks';
import './People.css';
import Moment from 'react-moment';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Table,
  TableCell,
  TableHead,
  Paper,
  TableContainer,
  TableRow,
  TableBody,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  root: {
    margin: '0 auto',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 1360,
    backgroundColor: theme.palette.background.paper,
    color: 'blue',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const PeopleTable = () => {
  const classes = useStyles();

  const [{ data, loading, error, response }, refetch] = useAxios(
    'http://localhost:5001/peoplelist',
  );

  const createTableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell component="th" scope="row">
            <Typography variant="h6">Nev</Typography>
          </TableCell>
          <TableCell component="th" align="right">
            <Typography variant="h6">Becenév</Typography>
          </TableCell>
          <TableCell component="th" align="right">
            <Typography variant="h6">Születés időpontja</Typography>
          </TableCell>
          <TableCell component="th" align="right">
            <Typography variant="h6">Születés helye</Typography>
          </TableCell>
          <TableCell component="th" align="right">
            <Typography variant="h6">Halál időpontja</Typography>
          </TableCell>
          <TableCell component="th" align="right">
            <Typography variant="h6">Halál helye</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const createTableBody = item => {
    const deathDate = !item.deathDate || item.deathDate === null ? '' : <Moment format="YYYY/MM/DD">{item.deathDate}</Moment>;
    const birthDate = !item.birthDate || item.birthDate === null ? '' : <Moment format="YYYY/MM/DD">{item.birthDate}</Moment>;
    return (
      <TableRow key={item._id}>
        <TableCell component="th" scope="row">{item.name}</TableCell>
        <TableCell align="right">{item.nick}</TableCell>
        <TableCell align="right">{birthDate}</TableCell>
        <TableCell align="right">{item.birthPlace}</TableCell>
        <TableCell align="right">{deathDate}</TableCell>
        <TableCell align="right">{item.deathPlace}</TableCell>
      </TableRow>
    );
  };

  const createTable = itemList => {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          {createTableHeader()}
          <TableBody>
            {itemList.map(createTableBody)}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div className={classes.root}>
      {createTable(data)}
    </div>
  );
};

export default PeopleTable;
