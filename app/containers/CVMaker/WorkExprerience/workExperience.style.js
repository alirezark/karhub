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
  alignCenter: {
    alignItems: 'center',
  },
  select: {
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#8E8E8C',
      },
    },
    '& svg': {
      color: '#8E8E8C',
    },
    '& .MuiSelect-icon': {
      right: 10,
    },
  },
  addRow: {
    display: 'flex',
    alignItems: 'center',
    margin: '40px 0 20px',
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
}));

export default styles;
