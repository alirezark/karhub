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
  card: {
    ...cardBox().panel,
  },
  icon: {
    ...cardBox().icon,
  },
  cardContent: {
    textAlign: 'center',
    paddingBottom: '38px!important',
  },
  cardTitle: {
    fontWeight: 500,
    color: '#4A4A4A',
  },
}));

export default styles;
