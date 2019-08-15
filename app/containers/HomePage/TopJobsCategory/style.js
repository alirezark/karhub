import { makeStyles } from '@material-ui/core';
import cardBox from 'mui/MCard/cardBox';

  const styles = makeStyles(theme => ({
    greyContainer: {
      backgroundColor: '#F5F5F5',
      padding: '5px 0 4rem',
      marginTop: '5rem',
    },
  sectionHead: {
    fontWeight: 'bold',
    margin: '2rem 0 3rem',
  },
  blueLink: {
    ...theme.typography.h2,
    color: '#486AB9',
    float: 'right',
    fontWeight: 'bold',
  },
  cardsRow: {
    marginBottom: '1rem',
  },
}));

export default styles;
