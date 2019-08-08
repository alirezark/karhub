import { makeStyles } from '@material-ui/core';
import { MSelectStyle } from 'mui/MSelect';

const styles = makeStyles(() => ({
  root: {
    marginTop: '3rem',
  },
  filters: {
    display: 'flex',
  },
  filter: {
    flex: 1,
    padding: '1rem',
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: 900,
    color: '#4A4A4A',
  },
  btnReset: {
    backgroundColor: '#7BCCC4',
    borderRadius: 8,
    color: '#fff',
    fontSize: '1.8rem',
    fontWeight: 100,
    lineHeight: '60px',
    width: 50,
    height: 50,
    marginTop: 48,
  },
  filterSelect: {
    ...MSelectStyle(),
  },
}));

export default styles;
