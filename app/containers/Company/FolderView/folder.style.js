import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  panel: {
    background: '#fff',
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    borderRadius: 8,
    position: 'relative',
    marginTop: '2.5rem',
    color: '#9B9B9B',
    fontSize: 12,
  },
  panelHead: {
    padding: '15px 20px 20px 30px',
    display: 'flex',
    alignItems: 'center',
    '& div:first-child': {
      flexGrow: 1,
    },
  },
  btnEdit: {
    color: theme.palette.primary.main,
  },
  statusContain: {
    display: 'flex',
    background: '#d2eedf',
    textAlign: 'center',
    width: '100%',
    color: '#333',
    '&>div': {
      flexGrow: 1,
      padding: '20px 0 10px',
    },
  },
  statusNumber: {
    width: 30,
    background: '#fff',
    lineHeight: '30px',
    borderRadius: 5,
    margin: '5px auto',
    marginTop: 10,
    fontWeight: 'bold',
  },
  col_avatar: {
    flexBasis: 80,
    borderBottom: 'none!important',
  },
  col_info: {
    flexBasis: 250,
    '& h3': {
      marginBottom: 20,
    },
    '& p': {
      fontSize: 12,
      color: '#000',
    },
  },
  col_icons: {
    flexGrow: 1,
    marginTop: 10,
  },
  col_btns: {
    flexBasis: 100,
    textAlign: 'right',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  requestsContain: {
    padding: '30px 20px 0',
  },
  request: {
    display: 'flex',
    alignItems: 'stretch',
    marginBottom: 20,
    '&>div': {
      paddingBottom: 20,
      borderBottom: '1px solid #f5f5f5',
    },
  },
  icons: {
    color: '#9B9B9B',
    fontSize: '.75rem',
    marginTop: 24,
    maxWidth: 300,
    '& i': {
      margin: '0 .5rem',
      color: '#7ecfa6',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  btnDescription: {
    color: theme.palette.primary.main,
  },
  btnView: {
    color: '#3a69db',
  },
}));

export default styles;
