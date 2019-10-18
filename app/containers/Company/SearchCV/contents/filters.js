import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader,
  makeStyles, Checkbox,
} from '@material-ui/core';
import MButton from 'mui/MButton';
import { map } from 'lodash';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    padding: 0,
    paddingLeft: theme.spacing(2),
    color: '#818181',
    '&:first-child': {
      marginTop: 16,
    },
    '&:last-child': {
      marginBottom: 8,
    },
    '& .MuiListItemText-primary': {
      fontSize: 14,
    },
  },
  filterPanel: {
    padding: '0 8px',
    borderRadius: 8,
    boxShadow: '0 0 6px 1px rgba(0,0,0,.2)',
    marginTop: theme.spacing(2),
  },
  btnFilter: {
    lineHeight: '32px',
    fontWeight: 800,
  },
  listItem: {
    borderBottom: '1px solid #ccc',
    '&:last-child': {
      border: 'none',
    },
  },
}));

function Filters(props) {
  const classes = styles();
  const [filters, setFilters] = useState(props.filters);

  useEffect(() => {
    if (props.filters.length > 0 && filters.length === 0) {
      setFilters(
        map(props.filters, (filter, index) => ({
          ...filter,
          open: index === 0,
          children: map(filter.children, child => ({
            ...child,
            checked: false,
          })),
        })),
      );
    }
  }, [props.filters]);

  const handleClick = index => {
    setFilters(
      map(filters, (filter, i) => ({
        ...filter,
        open: i === index ? !filter.open : filter.open,
      })),
    );
  };

  const handleCheck = id => {
    setFilters(
      map(filters, filter => ({
        ...filter,
        children: map(filter.children, child => ({
          ...child,
          checked: child.id === id ? !child.checked : child.checked,
        })),
      })),
    );
  };

  return (
    <div>
      <MButton className={classes.btnFilter} btnCyan fullWidth>
        فیلتر
      </MButton>

      <div className={classes.filterPanel}>
        <List component="nav" className={classes.root}>
          {filters.map((filter, index) => (
            <>
              <ListItem
                button
                className={classes.listItem}
                onClick={() => handleClick(index)}
              >
                <ListItemText primary={filter.name} />
                {filter.open ? (
                  <ExpandLess color="primary" />
                ) : (
                  <ExpandMore color="primary" />
                )}
              </ListItem>
              <Collapse in={filter.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {filter.children.map(child => (
                    <ListItem
                      button
                      className={classes.nested}
                      onClick={() => handleCheck(child.id)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          checked={child.checked}
                          inputProps={{
                            'aria-label': 'check',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={child.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </div>
    </div>
  );
}

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default Filters;
