import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  image: {
    alignSelf: 'center',
    maxWidth: '80%',
    maxHeight: '200px',
    width: 'auto',
    height: 'auto',
    margin: theme.spacing(2),
  },
}));

const LogoImage = () => {
  const theme = useTheme();
  const classes = useStyles();

  const expanded = !useMediaQuery(theme.breakpoints.down('lg'));

  const logo = useSelector((state) => state.session.server.attributes?.logo);
  const logoInverted = useSelector((state) => state.session.server.attributes?.logoInverted);

  if (logo) {
    if (expanded && logoInverted) {
      return <img className={classes.image} src={logoInverted} alt="AVL OCRA" />;
    }
    return <img className={classes.image} src={logo} alt="AVL OCRA" />;
  }
  // Default: OCRA logo
  return <img className={classes.image} src="/logo-ocra.png" alt="AVL OCRA" />;
};

export default LogoImage;
