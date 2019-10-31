import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  root: {
    background: '#f9f9f9',
  },
  container: {
    background: '#fff',
  },
  steps_container: {
    padding: '50px 40px',
    display: 'flex',
    position: 'relative',
    '&>div': {
      width: 'calc(25% - 12px)',
      '&:first-child': {
        flexBasis: '54px',
      },
    },
  },
  step_row: {
    position: 'absolute',
    top: 120,
    width: 'auto!important',
    right: 60,
    left: 60,
    background: '#f5f5f5',
    height: 5,
    borderRadius: 3,
    '& div': {
      width: '5px',
      height: 5,
      transition: '280ms ease-in-out',
      borderRadius: 3,
      background: 'rgb(0,160,193)',
      '&.step-1': {
        width: '25%',
        background:
          'linear-gradient(90deg, rgb(0,160,193) 0%, rgb(67,184,136) 100%)',
      },
      '&.step-2': {
        width: '50%',
        background:
          'linear-gradient(90deg, rgb(0,160,193) 0%, rgb(67,184,136) 50%, rgb(67,184,136) 100%)',
      },
      '&.step-3': {
        width: '75%',
        background:
          'linear-gradient(90deg, rgb(0,160,193) 0%, rgb(67,184,136) 66%, rgb(67,184,136) 100%)',
      },
      '&.step-4': {
        width: '100%',
        background:
          'linear-gradient(90deg, rgb(0,160,193) 0%, rgb(67,184,136) 75%, rgb(67,184,136) 100%)',
      },
    },
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    '&.step_active': {
      '& .step_icon': {
        background: '#c3d2f3',
        color: '#3969da',
        '& .step-title': {
          fontWeight: 800,
        },
      },
      '& .step_dots': {
        borderColor: '#c3d2f3',
      },
    },
    '&.step_done': {
      '& .step_icon': {
        background: '#c9ebd9',
        color: '#4bbb81',
      },
      '& .step_dots': {
        borderColor: '#c9ebd9',
      },
    },
  },
  step_dots: {
    flexGrow: 1,
    borderTop: '2px dashed #fef4e4',
    margin: '0 25px',
    transition: '200ms',
  },
  step_icon: {
    width: 54,
    height: 54,
    borderRadius: 50,
    background: '#ffeac9',
    color: '#fcb94c',
    textAlign: 'center',
    lineHeight: '5px',
    transition: '200ms',
    '& div': {
      fontSize: 30,
      fontWeight: 900,
    },
    '& .step-title': {
      fontSize: 14,
      fontWeight: 400,
      width: 140,
      transition: '200ms',
      margin: '40px 0 0 -50px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      color: '#818181',
    },
    '& i:before': {
      fontSize: 36,
      marginLeft: '-40px',
      marginTop: 11,
      display: 'block',
    },
  },
}));

export default styles;
