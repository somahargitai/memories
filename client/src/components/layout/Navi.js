import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tab, Tabs } from '@material-ui/core';
import {
  NoteAdd as DocsAddIcon,
  PostAdd as DocsAddIcon2,
  ImageSearch as GalleryFilterIcon,
  BurstMode as GalleryIcon,
  Favorite as FavoriteIcon,
  Home,
  PersonAdd as PersonAddIcon,
  PersonPin,
  AddPhotoAlternate,
  Phone,
} from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: blue[500],
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Navi = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          >
            <Tab component={Link} to='/' icon={<Home />} label="Kezdőoldal" />
            <Tab component={Link} to='/people' icon={<PersonAddIcon />} label="Családtagok" />
            <Tab component={Link} to='/images' icon={<AddPhotoAlternate />} label='Képek' />
            <Tab component={Link} to='/docs' icon={<DocsAddIcon />} label="Új dokumentum" />
            <Tab component={Link} to='/' icon={<DocsAddIcon2 />} label="Új történet" />

            <Tab icon={<PersonPin />} label="NEARBY" />
            <Tab icon={<GalleryFilterIcon />} label="GalleryFilterIcon" />
            <Tab icon={<GalleryIcon />} label="GalleryIcon" />
            <Tab icon={<FavoriteIcon />} label="FavoriteIcon" />
            <Tab icon={<Home />} label="Home" />
            <Tab icon={<PersonAddIcon />} label="PersonAddIcon" />
            <Tab icon={<PersonPin />} label="PersonPin" />
            <Tab icon={<AddPhotoAlternate />} label="AddPhotoAlternate" />
            <Tab icon={<Phone />} label="Phone" />
          </Tabs>
        </Paper>
      </div>
    </Fragment>
  );
};

export default Navi;
