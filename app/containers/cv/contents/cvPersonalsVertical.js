import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { MAvatar, MBtnLink } from 'mui/index';
import imgAvatar from 'app/assets/images/avatar.jpeg';
import { AboutMe, SocialNetworks } from '../widgets';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  avatarContain: {
    position: 'relative',
    width: 85,
    height: 85,
    margin: '30px auto',
    '&:before, &:after, &>div:first-child': {
      content: '" "',
      position: 'absolute',
      width: 98,
      height: 98,
      borderRadius: 50,
    },
    '&:before': {
      top: -11,
      left: -16,
      background: '#4fb880',
    },
    '&:after': {
      right: -11,
      bottom: -11,
      background: '#f6b54f',
    },
    '&>div:first-child': {
      left: -11,
      bottom: -10,
      background: '#7bc8c0',
      zIndex: 1,
      display: props => (props.theme === 'grey' ? 'block' : 'none'),
    },
  },
  avatarContain2: {
    width: 95,
    height: 95,
    margin: '45px auto 20px',
    '&:before, &:after': {
      width: 125,
      height: 125,
      borderRadius: 100,
    },
    '&:before': {
      top: -32,
      left: -50,
      zIndex: 2,
    },
    '&:after': {
      right: -100,
      bottom: 20,
      width: 200,
      height: 200,
    },
  },
  avatar: {
    position: 'relative',
    zIndex: 2,
    right: 0,
    margin: 0,
    width: props => (props.theme === 'grey' ? 85 : 95),
    height: props => (props.theme === 'grey' ? 85 : 95),
    padding: 2,
    boxShadow: '0 0 7px 0 rgba(178,178,178,0.75)',
    border: 'none',
  },
  mainInfo: {
    textAlign: 'center',
    '& h3': {
      fontSize: 16,
      margin: '5px 0',
    },
    '& p': {
      fontSize: 12,
      margin: '10px 0',
    },
  },
  btnLink: {
    '&&': {
      color: props =>
        props.theme === 'grey' ? theme.palette.primary.main : '#333',
      padding: '2px 10px',
      fontSize: 10,
      lineHeight: '24px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: '0 15px',
      width: 'calc(100% - 30px)',
    },
    '&& i:before': {
      color: '#666',
      fontSize: 14,
      verticalAlign: '2px',
    },
  },
  divider: {
    width: '60%',
    borderTop: '1px solid #fff',
    margin: '10px 0',
  },
  moreInfo: {
    display: 'flex',
    alignItems: 'center',
    '& div:first-child': {
      flexShrink: 0,
      flexGrow: 0,
      flexBasis: 24,
      '& i:before': {
        fontSize: 14,
      },
    },
    '& div:last-child': {
      flexGrow: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: 12,
    },
  },
  aboutMe: {
    '& .icon-contain': {
      flexBasis: 30,
    },
    '& .title': {
      '& h3': {
        color: props =>
          props.theme === 'grey' ? theme.palette.primary.main : '#333',
      },
    },
    '& .content': {
      '& p': {
        fontSize: 11,
      },
    },
  },
  introInfoList: {
    fontSize: 14,
    '& .MuiListItemIcon-root': {
      minWidth: 30,
    },
    '& .MuiTypography-root': {
      fontSize: 12,
      color: props =>
        props.theme === 'grey' ? theme.palette.primary.main : '#333',
    },
    '& .MuiListItemSecondaryAction-root i:before': {
      fontSize: 16,
    },
    '& .MuiListItem-button': {
      paddingLeft: 0,
    },
  },
  socials: {
    '& .title': {
      '& h3': {
        color: props =>
          props.theme === 'grey' ? theme.palette.primary.main : '#333',
      },
    },
  },
}));

function CVPersonalsVertical(props) {
  const { theme = 'gray' } = props;
  const classes = styles({ theme });
  const avatarContainClasses = classNames(classes.avatarContain, {
    [classes.avatarContain2]: theme === 'green',
  });
  return (
    <div className={classes.root}>
      <div>
        <div className={avatarContainClasses}>
          <div />
          <MAvatar className={classes.avatar} src={imgAvatar} />
        </div>
      </div>
      <div className={classes.mainInfo}>
        <Typography variant="h3">محمدرضا میر قاسمی</Typography>
        <Typography>پیاده سازی رابط کاربری وب</Typography>
        <MBtnLink to="www.go.com" fullWidth iconic className={classes.btnLink}>
          www.MonkeyDLuffy.com
          <i className="flaticon-link" />
        </MBtnLink>
      </div>
      <div>
        <div className={classes.divider} />
        <div className={classes.moreInfo}>
          <div>
            <i className="flaticon-telephone" />
          </div>
          <div>09125484232</div>
        </div>
        <div className={classes.moreInfo}>
          <div>
            <i className="flaticon-e-mail" />
          </div>
          <div>alavi.ali@gmail.com</div>
        </div>
        <div className={classes.moreInfo}>
          <div>
            <i className="flaticon-location" />
          </div>
          <div>تهران. یاخچی آباد. دور برگردون سوم. چهار راه پنچم</div>
        </div>
        <div className={classes.moreInfo}>
          <div>
            <i className="flaticon-calendar" />
          </div>
          <div>۱۳۶۸/۱۲/۳</div>
        </div>
      </div>
      <div>
        <div className={classes.divider} />
        <AboutMe className={classes.aboutMe} fullWidthContent />
      </div>
      <div>
        <div className={classes.divider} />

        <List className={classes.introInfoList}>
          <ListItem button>
            <ListItemIcon>
              <i className="flaticon-video-player" />
            </ListItemIcon>
            <ListItemText primary="معرفی ویدیویی" />
            <ListItemSecondaryAction>
              <i className="flaticon-left-arrow-2" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <i className="flaticon-microphone" />
            </ListItemIcon>
            <ListItemText primary="معرفی صوتی" />
            <ListItemSecondaryAction>
              <i className="flaticon-left-arrow-2" />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
      <div>
        <div className={classes.divider} />
        <SocialNetworks className={classes.socials} />
      </div>
    </div>
  );
}

CVPersonalsVertical.propTypes = {
  theme: PropTypes.string,
};

export default CVPersonalsVertical;
