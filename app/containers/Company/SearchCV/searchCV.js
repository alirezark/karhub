import React, { useContext, useState } from 'react';
import { Grid } from '@material-ui/core';
import Search from './contents/search';
import styles from './searchCV.style';
import { SearchCVContext } from './searchCV.provider';
import MContainer from 'mui/MContainer';
import Filters from './contents/filters';
import SearchResult from './contents/searchResult';
import MoveDialog from './contents/moveDialog';
import CVDialog from './contents/cvDialog';

function SearchCV() {
  const { result, filters } = useContext(SearchCVContext);
  const [openMoveDialog, setOpenMoveDialog] = useState(false);
  const [openCVDialog, setOpenCVDialog] = useState(true);
  const classes = styles();

  const handleOpenMoveDialog = () => {
    setOpenMoveDialog(true);
  };

  const handleCloseMoveDialog = () => {
    setOpenMoveDialog(false);
  };

  const handleOpenCVDialog = () => {
    setOpenCVDialog(true);
  };

  const handleCloseCVDialog = () => {
    setOpenCVDialog(false);
  };

  return (
    <div>
      <Search />
      <MContainer className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Filters filters={filters} />
          </Grid>
          <Grid item md={9}>
            <SearchResult
              result={result}
              onMoveToFolder={handleOpenMoveDialog}
              showCV={handleOpenCVDialog}
            />
          </Grid>
        </Grid>
      </MContainer>
      <MoveDialog open={openMoveDialog} onClose={handleCloseMoveDialog} />
      <CVDialog open={openCVDialog} onClose={handleCloseCVDialog} />
    </div>
  );
}

export default SearchCV;
