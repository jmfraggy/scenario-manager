import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

// Inspired by the former Facebook spinners.
const useStylesSchneider = makeStyles((theme) => ({
  marginTotal: {
    margin: '0 3.4rem 0 0',
  },
  whiteText: {
    color: '#fff',
    fontWeight: '900',
  },
  blackText: {
    color: '#000',
    fontWeight: '900',
  },
  root: {
    position: 'relative',
  },
  bottomTotal: {
    color: '#000',
  },
  topTotal: {
    color: '#fff',
    position: 'absolute',
    left: 0,
  },
  bottomCard: {
    color: '#EBEBEB',
  },
  topCard: {
    color: '#FA582A',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

const CircularProgressWithLabel = ({ value, type }) => {
  const classes = useStylesSchneider();

  return (
    <Box
      className={type === 'total' ? classes.marginTotal : ''}
      position="relative"
      display="inline-flex"
    >
      <CircularProgress
        variant="determinate"
        className={type === 'total' ? classes.bottomTotal : classes.bottomCard}
        size={40}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        className={type === 'total' ? classes.topTotal : classes.topCard}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        value={value}
      />
      <Box className="circular-box-material">
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          className={type === 'total' ? classes.whiteText : classes.blackText}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
