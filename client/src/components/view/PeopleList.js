import React, { Fragment } from 'react';
import useAxios from 'axios-hooks';
import './People.css';
import Moment from 'react-moment';

import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Table,
  TableCell,
  Paper,
  TableContainer,
  TableRow,
  TableBody,
} from '@material-ui/core/';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: 'blue',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const People = () => {
  const classes = useStyles();

  const [{ data, loading, error, response }, refetch] = useAxios(
    'http://localhost:5001/peoplelist',
  );

  const createPanelItem = item => {
    return (
      <ExpansionPanel key={item._id}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{item.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Nick
                  </TableCell>
                  <TableCell align="right">{item.nick}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Születetés ideje
                  </TableCell>
                  <TableCell align="right">
                    <Moment format="YYYY/MM/DD">{item.birthDate}</Moment>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Születetés helye
                  </TableCell>
                  <TableCell align="right">{item.birthPlace}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Halál ideje
                  </TableCell>
                  <TableCell align="right">
                    <Moment format="YYYY/MM/DD">{item.deathDate}</Moment>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Halál helye
                  </TableCell>
                  <TableCell align="right">{item.birthPlace}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };

  const createPanel = listItems => {
    return listItems.map(createPanelItem);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!</p>;
  }

  // Unused now, TBD as visible when no data
  const createEmpty = (loading, error) => {
    if (loading || error) {
      return (
        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              Disabled Expansion Panel 1
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      );
    }
    return (
      <ExpansionPanel disabled>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Disabled Expansion Pane 2l
          </Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    );
  };

  return (
    <div className={classes.root}>
      {createPanel(data)}
    </div>
  );
};

export default People;
