import React from 'react';
import { makeStyles, Button, Grid } from '@material-ui/core';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import SearchBox from 'app/components/SearchBox';
import MTextField from 'mui/MTextField';
import { SearchOutlined } from '@material-ui/icons';

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
  text: {
    '& fieldset': {
      borderColor: 'transparent',
      boxShadow: '0 0 10px 1px rgb(75, 187, 129, .5)',
      background: '#fff',
      borderWidth: 1,
    },
    '& .MuiOutlinedInput-root': {
      fontSize: 14,
      fontWeight: 300,
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '15px 15px 15px 14px',
    },
    '& input, & svg': {
      zIndex: 1,
    },
  },
  wordFilterContain: {
    marginTop: '1rem',
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
        <Grid container spacing={3} className={classes.wordFilterContain}>
          <Grid item md={4}>
            <MTextField
              fullWidth
              className={classes.text}
              placeholder="عین این عبارات یا کلمات"
            />
          </Grid>
          <Grid item md={4}>
            <MTextField
              fullWidth
              className={classes.text}
              placeholder="هرکدام از این کلمات"
            />
          </Grid>
          <Grid item md={4}>
            <MTextField
              fullWidth
              className={classes.text}
              placeholder="هیچ یک از این کلمات"
            />
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

export default Search;
