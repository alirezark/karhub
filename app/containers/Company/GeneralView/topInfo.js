import React from 'react';
import propTypes from 'prop-types';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import icon1 from 'app/assets/images/icon-1.png';
import MAvatar from 'mui/MAvatar';
import MButton from 'mui/MButton';
import MIconInfo from 'mui/MIconInfo';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: '#effffe',
    borderRadius: 8,
    padding: 10,
  },
  menu: {
    flexBasis: '120px',
  },
  viewCount: {
    flexGrow: 1,
    lineHeight: '36px',
    '& span': {
      color: theme.palette.primary.main,
      fontWeight: 900,
      marginLeft: '.2rem',
    },
  },
  icoInfo: {
    fontWeight: 500,
    fontSize: 'inherit',
    color: 'inherit',
    '& i': {
      color: theme.palette.primary.light,
      marginRight: '.5rem',
    },
  },
  avatarContain: {
    flexBasis: 150,
  },
  avatar: {
    position: 'relative',
    margin: 0,
    right: 0,
  },
  detail: {
    flexGrow: 1,
    '& p': {
      color: theme.palette.primary.main,
      fontSize: '.85rem',
      fontWeight: 800,
    },
  },
  firstRow: {
    marginTop: '1.5rem',
  },
  btnLink: {
    color: '#4c90d7',
    float: 'right',
    fontSize: '.75rem',
    fontWeight: 800,
  },
  iconInfo: {
    float: 'right',
    color: '#9A9A9A',
    paddingRight: 10,
  },
}));

function TopInfo(props) {
  const classes = styles();
  const { company } = props;

  return (
    <div className={classes.root}>
      <div className={classes.avatarContain}>
        <MAvatar src={icon1} alt="user name" className={classes.avatar} />
      </div>
      <div className={classes.detail}>
        <Grid container className={classes.firstRow}>
          <Grid item xs={8}>
            <Typography variant="h3">{company.name}</Typography>
          </Grid>
          <Grid item xs={4}>
            <MButton href={company.website} className={classes.btnLink}>
              مشاهده وب سایت
            </MButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <Typography>تعداد شغل فعال:{company.activeJobs}</Typography>
          </Grid>
          <Grid item xs={4}>
            <MIconInfo
              icon="i-location"
              text={company.city}
              className={classes.iconInfo}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

TopInfo.propTypes = {
  company: propTypes.object.isRequired,
};

export default TopInfo;
