import { makeStyles } from '@material-ui/core';
import cardBox from 'mui/MCard/cardBox';

const styles = makeStyles(theme => ({
  card: {
    ...cardBox().panel,
  },
  icon: {
    ...cardBox().icon,
  },
  cardContent: {
    textAlign: 'center',
    paddingBottom: '16px!important',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardFooter: {
    color: theme.palette.primary.main,
    fontSize: '.65rem',
    textAlign: 'left',
    display: 'flex',
    marginTop: 9,
    '& span:first-child': {
      flexGrow: 1,
    },
  },
}));

export default styles;
