import { makeStyles } from '@material-ui/core';
import cardBox from 'mui/MCard/cardBox';

const styles = makeStyles(theme => ({
  card: {
    ...cardBox().panel,
    margin: '54px 14px 0',
    position: 'relative',
    overflow: 'visible',
  },
  icon: {
    ...cardBox().icon,
  },
  avatar: {
    width: 114,
    height: 114,
    position: 'absolute',
    right: '50%',
    margin: '-57px',
    padding: 7,
    border: '1px solid',
    background: '#fff',
    borderColor: theme.palette.primary.main,
    '& img': {
      borderRadius: '100%',
    },
  },
  cardContent: {
    textAlign: 'center',
    paddingBottom: '16px!important',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    marginTop: '4rem',
  },
  cardSubTitle: {
    color: '#949494',
    marginTop: 8,
    fontWeight: 'normal',
    display: 'block',
  },
  cardText: {
    fontSize: 12,
    lineHeight: '34px',
    color: '#606062',
    textAlign: 'justify',
    textAlignLast: 'center',
    display: 'block',
    padding: '8px 12px 24px',
  },
  cardSeparator: {
    margin: '15px auto 0px',
    width: '92%',
    height: 18,
    textAlign: 'left',
    '& img': {
      float: 'left',
    },
    '& span': {
      width: 48,
      borderBottom: '1px solid #979797',
      margin: '0 auto',
      paddingBottom: 9,
      display: 'block',
    },
  },
}));

export default styles;
