import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  greyContainer: {
    backgroundColor: '#F5F5F5',
    padding: '5px 0',
    marginBottom: '-5rem',
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
}));

export default styles;
