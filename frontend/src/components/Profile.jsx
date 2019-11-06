import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: '20%'
  }
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <h1>Profile page </h1>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src="https://picsum.photos/id/3/500/500"
          className={classes.avatar}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://picsum.photos/id/7/200/200"
          className={classes.bigAvatar}
        />
      </Grid>

      <Footer />
    </div>
  );
}
