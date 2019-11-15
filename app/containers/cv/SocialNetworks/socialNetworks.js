// TODO:All of this widget code should be changed
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import PureWidget from '../contents/pureWidget';

const styles = makeStyles(() => ({
  widget: {
    '& .icon-contain': {
      flexBasis: 30,
    },
  },
  introInfoList: {
    fontSize: 14,
    padding: 0,
    '& .MuiListItemIcon-root': {
      minWidth: 28,
      '& i:before': {
        fontSize: 16,
      },
    },
    '& .MuiListItemText-root': {
      '& span': {
        fontSize: 12,
      },
      direction: 'ltr',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '& .MuiListItem-button': {
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
}));

function SocialNetworks(props) {
  const {
    editable,
    larger = false,
    fullWidthContent = true,
    className,
  } = props;
  const classes = styles();

  const customClass = classNames(classes.widget, {
    [className]: className !== undefined,
  });

  return (
    <PureWidget
      title="شبکه های اجتماعی"
      icon="flaticon-contact"
      editable={editable}
      larger={larger}
      className={customClass}
      fullWidthContent={fullWidthContent}
    >
      <List className={classes.introInfoList}>
        <ListItem button>
          <ListItemIcon>
            <i className="flaticon-linkedin" />
          </ListItemIcon>
          <ListItemText primary="mohammadreza mirghasemi" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="flaticon-telegram" />
          </ListItemIcon>
          <ListItemText primary="@mrghasemi" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="flaticon-instagram" />
          </ListItemIcon>
          <ListItemText primary="@mrghasemi" />
        </ListItem>
      </List>
    </PureWidget>
  );
}

SocialNetworks.propTypes = {
  editable: PropTypes.bool,
  larger: PropTypes.bool,
  fullWidthContent: PropTypes.bool,
  className: PropTypes.string,
};

export default SocialNetworks;
