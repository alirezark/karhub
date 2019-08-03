import { makeStyles } from '@material-ui/core';
import cardBox from 'mui/MCard/cardBox';

const styles = makeStyles(theme => ({
  root: {
    marginTop: '5rem',
  },
  sectionHead: {
    fontWeight: 'bold',
    margin: '2rem 0',
  },
  section_img: {
    float: 'right',
    marginRight: '2rem',
  },
  card: {
    ...cardBox().panel,
    margin: '54px 14px 0',
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
