import { makeStyles } from '@material-ui/core';
import cardBox from 'mui/MCard/cardBox';

const styles = makeStyles(theme => ({
  root: {
    marginTop: '3rem',
  },
  numContain: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#4A4A4A',
  },
  numText: {
    color: theme.palette.primary.main,
    fontSize: '4.5rem',
    verticalAlign: 'middle',
  },
  title: {
    fontWeight: 900,
    fontSize: '1.67rem',
    marginBottom: '3.5rem',
  },
  card: {
    ...cardBox().panel,
    color: '#606062',
  },
  cardMedia: {
    ...cardBox().icon,
    backgroundSize: 'cover',
    height: 180,
  },
  cardContent: {
    textAlign: 'justify',
    paddingBottom: '16px!important',
  },
  cardTitle: {
    fontWeight: 800,
    lineHeight: '34px',
  },
  cardDescription: {
    margin: '0.5rem 0 1rem',
    display: 'block',
    fontSize: 12,
    lineHeight: '28px',
    fontWeight: 'normal',
  },
  cardFooter: {
    color: theme.palette.primary.main,
    fontSize: '.65rem',
    textAlign: 'left',
    display: 'flex',
    marginTop: 9,
    '& span:first-child': {
      flexGrow: 1,
      color: '#A6A6A6',
    },
  },
}));

export default styles;
