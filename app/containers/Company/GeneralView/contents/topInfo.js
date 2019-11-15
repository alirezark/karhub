import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import icon1 from 'app/assets/images/icon-1.png';
import MAvatar from 'mui/MAvatar';
import MButton from 'mui/MButton';
import MIconInfo from 'mui/MIconInfo';
import { UserContext } from 'app/containers/GlobalHeader/UserProvider';

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
    display: 'flex',
    '&>div:first-child': {
      flexGrow: 1,
      '& h3': {
        margin: '2rem 0 .5rem',
      },
    },
    '& p': {
      color: theme.palette.primary.main,
      fontSize: '.85rem',
      fontWeight: 800,
    },
  },
  firstRow: {
    marginTop: '1.5rem',
  },
  btnLinkContain: {
    // TODO: this is not true solution for btn link problem
    height: 38,
  },
  btnLink: {
    color: '#4c90d7',
    float: 'right',
    fontSize: '.75rem',
    fontWeight: 800,
    margin: '3px 0 2px',
    marginBottom: 2,
  },
  iconInfo: {
    float: 'right',
    color: '#9A9A9A',
    paddingRight: 10,
  },
  whiteSpace: {
    margin: '1.4rem',
  },
}));

function TopInfo(props) {
  const classes = styles();
  const { company } = props;
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className={classes.root}>
      <div className={classes.avatarContain}>
        <MAvatar src={icon1} alt="user name" className={classes.avatar} />
      </div>
      <div className={classes.detail}>
        <div>
          <Typography variant="h3">{company.name}</Typography>
          <Typography>تعداد شغل فعال:{company.activeJobs}</Typography>
        </div>
        <div>
          {user.role === 'company' ? (
            <MButton btnBlue>ارتقا پروفایل شرکت</MButton>
          ) : (
            <div className={classes.whiteSpace} />
          )}
          <div className={classes.btnLinkContain}>
            <MButton href={company.website} className={classes.btnLink}>
              مشاهده وب سایت
            </MButton>
          </div>
          <MIconInfo
            icon="i-location"
            text={company.city}
            className={classes.iconInfo}
          />
        </div>
      </div>
    </div>
  );
}

TopInfo.propTypes = {
  company: propTypes.object.isRequired,
};

export default TopInfo;
