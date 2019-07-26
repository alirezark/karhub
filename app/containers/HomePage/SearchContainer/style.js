import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
    position: 'relative',
    paddingBottom: 200,
  },
  HotText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  searchHistory: {
    marginTop: '1.5rem',
    color: '#4A4A4A',
    fontSize: 12,
  },
  head2: {
    marginTop: '6rem',
  },
  subtitle2: {
    lineHeight: '2rem',
    marginTop: '.8rem',
  },
  greyLink: {
    fontSize: 10,
    color: '#BDBDBD',
    marginLeft: '.5rem',
  },
  blueLink: {
    color: '#486AB9',
    paddingBottom: 5,
    textDecoration: 'none',
    borderBottom: '1px solid #486AB9',
    marginLeft: '.5rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  greenLink: {
    color: '#4BBB81',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  employers: {
    marginTop: '1rem',
    '& i': {
      marginRight: '1rem',
    },
  },
  intro_img: {
    position: 'absolute',
    right: '-200px',
    top: 130,
  },
}));

export default styles;
