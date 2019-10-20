import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  greyContainer: {
    backgroundColor: '#F9F9F9',
    padding: '5px 0',
  },
  root: {
    marginTop: '1rem',
  },
  breadcrumb: {
    marginLeft: '3rem',
    '& p': {
      fontSize: 12,
      color: '#818181',
      cursor: 'pointer',
    },
    '& li:last-child p': {
      color: theme.palette.primary.main,
      cursor: 'default',
    },
  },

  panel: {
    background: '#fff',
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    borderRadius: 8,
    position: 'relative',
    marginTop: '2.5rem',
    color: '#9B9B9B',
    fontSize: 12,
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

  sectionHead: {
    marginTop: '2rem',
    marginBottom: '1rem',
    fontWeight: 900,
  },
  section_img: {
    float: 'right',
    marginRight: '-9rem',
    marginTop: '3rem',
  },
  cardsContainer: {
    marginTop: '2rem',
    marginBottom: '3rem',
  },
  cardsContainerSpaceBottom: {
    marginBottom: '-5rem',
  },
  whiteSpace: {
    padding: 10,
  },
}));

export default styles;
