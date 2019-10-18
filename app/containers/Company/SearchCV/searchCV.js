import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import Search from './contents/search';
import styles from './searchCV.style';
import { SearchCVContext } from './searchCV.provider';
import MContainer from 'mui/MContainer';
import Filters from './contents/filters';
import SearchResult from './contents/searchResult';

function SearchCV() {
  const { result, filters } = useContext(SearchCVContext);
  const classes = styles();

  return (
    <div>
      <Search />
      <MContainer className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Filters filters={filters} />
          </Grid>
          <Grid item md={9}>
            <SearchResult result={result}/>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

export default SearchCV;
