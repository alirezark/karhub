import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import SearchBox from 'app/components/SearchBox';
import MTableBox from 'mui/MTableBox';

const style = makeStyles(theme => ({
  root: {
    background: '#f5f5f5',
    padding: '40px 0',
  },
  container: {
    maxWidth: 800,
  },
  HotText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  btnAdvance: {
    margin: 5,
    padding: 7,
  },
  searchRow: {
    display: 'flex',
    flexGrow: 1,
    marginTop: 30,
  },
  searchContain: {
    flexGrow: 1,
  },
}));

function Search() {
  const classes = style();

  const handleSearch = () => {};

  return (
    <div className={classes.root}>
      <MContainer className={classes.container}>
        <Typography variant="h2" gutterBottom>
          <span className={classes.HotText}>کارهاب، </span>
          بدون دغدغه شغل مورد علاقه‌ت رو پیدا کن!
        </Typography>
        <div className={classes.searchRow}>
          <div className={classes.searchContain}>
            <SearchBox onSubmit={handleSearch} />
          </div>
          <div>
            <Button className={classes.btnAdvance}>جستجوی پیشرفته</Button>
          </div>
        </div>
      </MContainer>
    </div>
  );
}

export default Search;
