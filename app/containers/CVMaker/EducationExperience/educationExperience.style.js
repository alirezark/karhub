import { makeStyles } from '@material-ui/core';
import { cvMakerFooter, form } from '../styles';

const styles = makeStyles(theme => ({
  ...cvMakerFooter,
  ...form,
  root: {
    background: '#f9f9f9',
  },
  container: {
    background: '#fff',
    padding: '20px 32px 40px',
  },
  addRow: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0 20px',
    '& div:first-child': {
      flexGrow: 1,
      borderTop: '1px solid',
      borderColor: theme.palette.primary.main,
      marginRight: 10,
    },
    '& .MuiButton-label': {
      color: theme.palette.primary.main,
      '& i': {
        color: '#8E8E8C',
      },
    },
  },
  btnAddCourse: {
    border: '1px solid',
    borderColor: theme.palette.primary.main,
  },
}));

export default styles;
