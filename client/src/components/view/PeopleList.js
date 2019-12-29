import React, { Fragment, useState } from 'react';
import useAxios from 'axios-hooks';
// import '../../App.css';
import './People.css';

import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  Collapse,
  ListItemText,
  ListSubheader,
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
  TableHead,
} from '@material-ui/core/';


import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
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
    return(
      <ExpansionPanel key={item.id}>
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
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  Nick
                </TableCell>
                <TableCell align="right">
                  {item.nick}
                </TableCell>
              </TableRow>
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  Születetés ideje
                </TableCell>
                <TableCell align="right">
                  {item.birth}
                </TableCell>
              </TableRow>
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  Születetés helye
                </TableCell>
                <TableCell align="right">
                  {item.birthPlace}
                </TableCell>
              </TableRow>
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  e-mail
                </TableCell>
                <TableCell align="right">
                  {item.email}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  const createPanel = listItems => {
    return listItems.map(createPanelItem);
  };

  if (loading) { return <p>Loading...</p>; }
  if (error) { return <p>Error!</p>; }

  const createEmpty = (loading, error) => {
    if(loading || error ) {
      return(

        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Disabled Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
      </ExpansionPanel>
      );
    }
    return(
      <ExpansionPanel disabled>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Expansion Pane 2l</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    );
  }

  return (
    <div className={classes.root}>
      {createPanel(data)}
    </div>
  );
};

export default People;
